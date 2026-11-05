# 前十次课程总纲：从量化入门到可解释策略研究

这个总纲补足每节课的阅读材料、主动输出目标、知识脉络和隐含假设。你可以把这里列出的链接逐课放进 NotebookLM，然后按每节课的输出要求做费曼式复述。

## 五个方面

这门课把量化交易入门拆成五个方面：

1. **市场机制**：资产、订单、成交、账户、期货合约和交易约束。
2. **信号假设**：趋势、反转、波动、流动性、情绪、宏观、基本面等信号在试图解释什么。
3. **数据计算**：用 Python/pandas 把价格、收益率、滚动指标和时间对齐变成可复现数据管道。
4. **回测验证**：把信号转成持仓和收益，并控制未来函数、样本外、成本、过拟合和多重检验。
5. **风险执行与专业化**：仓位、组合、交易成本、执行、期货/商品迁移和小资金验证。

为什么这五个方面就够支撑入门：一个可执行策略必须经过“市场里有什么可交易对象”到“我相信什么行为会重复”到“我如何用数据表达它”到“历史检验是否诚实”到“我能否带着风险和成本活下来”的完整链条。少任何一环，策略都会变成不可验证的观点、不可复现的脚本，或不可交易的漂亮曲线。

这个划分的隐含假设：

- 市场里存在某些可重复但不稳定的统计结构。
- 历史数据不能证明未来，但能淘汰坏想法。
- 交易规则可以先被写成可复现的机械流程。
- 风险管理不是策略之后的补丁，而是策略定义的一部分。
- 入门阶段应优先研究流动性好、数据干净、机制清楚的市场。

会打破这些假设的其他思想：

- **深度基本面研究**：优势来自产业理解和个体资产判断，不一定先从规则回测开始。
- **高频/做市**：核心是订单簿、延迟、排队和库存控制，不适合本课程初期。
- **期权/结构化产品定价**：核心是无套利、波动率曲面和希腊字母，不是普通方向性策略。
- **纯主观宏观交易**：叙事和情景推演更重要，回测只是辅助。
- **私有另类数据交易**：优势可能来自数据获取和业务流程理解，必须额外处理授权、脱敏和合规。

## 课程 1：从交易想法到可检验假设

**目标**：把“我觉得会涨”改写成可回测、可否证、带风险规则的策略假设卡。

**为什么排第一**：所有后续技术都服务于这个动作。如果想法不能写成可检验假设，Python、因子、机器学习和回测都会变成装饰。

**核心阅读**

- [Investor.gov: Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)
  阅读目标：解释市价单、限价单、止损单分别控制了什么，又放弃了什么。
- [Investor.gov: What is Risk?](https://www.investor.gov/introduction-investing/investing-basics/what-risk)
  阅读目标：把风险从“亏钱”扩展到波动、流动性、期限和不确定性。
- [QuantStart: Successful Algorithmic Trading](https://www.quantstart.com/successful-algorithmic-trading-ebook/)
  阅读目标：理解一个系统交易流程包括研究、数据、回测、统计测试、风险、仓位和执行。
- [Trading and Exchanges: Market Microstructure for Practitioners](https://global.oup.com/academic/product/trading-and-exchanges-9780195144703)
  阅读目标：建立交易所、订单簿、流动性供给者、买卖价差和交易者类型的基础语言。

**主动输出**

用费曼法向一个完全不懂交易的人解释：为什么“我觉得铜会涨”不是策略，而“如果库存下降、基差走强、价格突破均线，则下一交易日以固定风险仓位买入”开始接近策略。

**本课隐含假设**

我们假设策略首先应当被写成可复现规则。反例是主观交易或深度产业判断：它们可以有价值，但不容易直接进入回测。

## 课程 2：市场信号地图

**目标**：理解常见信号家族：趋势、反转、波动、成交量/流动性、市场宽度、情绪/仓位、宏观/基本面。

**为什么排第二**：你之前卡住的点不是不会填卡，而是不知道信号从哪里来。本课建立“信号来源地图”。

**核心阅读**

- [AQR: Time Series Momentum](https://www.aqr.com/Insights/Research/Journal-Article/Time-Series-Momentum)
  阅读目标：解释“资产自身过去收益预测未来收益”这件事为什么是跨资产问题。
- [AQR: Fact, Fiction and Momentum Investing](https://www.aqr.com/Insights/Research/Journal-Article/Fact-Fiction-and-Momentum-Investing)
  阅读目标：复述动量的常见误解和实施成本为什么重要。
- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
  阅读目标：识别市场、规模、价值、盈利、投资、动量等因子数据如何被组织。
- [Cboe VIX](https://www.cboe.com/tradable-products/vix)
  阅读目标：解释 VIX 为什么更像风险状态变量，而不应机械当成方向信号。

**主动输出**

画一张表：每个信号家族回答什么问题、常见数据是什么、最适合放在 alpha/过滤器/仓位/执行的哪一层。

**本课隐含假设**

我们把信号看成可观察变量对未来分布的弱提示。反例是强因果事件，例如政策突变、战争、制裁或企业欺诈，历史统计规律可能瞬间失效。

## 课程 3：Python 金融数据最小工作流

**目标**：用 pandas 建立价格、收益率、滚动指标和信号延迟的最小数据管道。

**为什么排第三**：没有可复现数据管道，后续所有回测结果都不可审计。

**核心阅读**

- [Python for Data Analysis, 3E](https://wesmckinney.com/book/)
  阅读目标：重点读 Python 基础、NumPy、pandas 入门和时间序列章节，理解数据分析工作流。
- [pandas: read/write tabular data](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html)
  阅读目标：解释为什么读取数据后先做 `head()`、`info()`、`dtypes`，而不是直接算指标。
- [pandas: Time series / date functionality](https://pandas.pydata.org/docs/user_guide/timeseries.html)
  阅读目标：说明为什么金融数据必须有时间索引、排序和频率意识。
- [pandas: Windowing operations](https://pandas.pydata.org/docs/user_guide/window.html)
  阅读目标：把移动均线、滚动波动率、滚动最高点都解释成同一个 rolling 思想。
- [pandas: DataFrame.shift](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shift.html)
  阅读目标：解释 `shift(1)` 如何避免用今天收盘信号吃今天收益。

**主动输出**

不用看代码，口头解释这条链：CSV -> 日期索引 -> 收益率 -> 滚动指标 -> 信号 -> shift 后持仓 -> 策略收益。

**本课隐含假设**

我们假设入门阶段先用日频、规则化、结构化数据。反例是 tick 数据、订单簿、新闻文本、现货贸易合同数据，它们需要更复杂的数据工程。

## 课程 4：最小回测与偏差控制

**目标**：把信号变成持仓和收益，并能识别未来函数、样本外、交易成本和过拟合。

**为什么排第四**：回测不是验证未来会赚钱，而是检查策略假设是否值得继续研究。

**核心阅读**

- [QuantConnect: Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)
  阅读目标：列出 look-ahead、survivorship、overfitting、outlier 等研究偏差。
- [QuantConnect: Reality Modeling](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/key-concepts)
  阅读目标：解释 fills、slippage、fees、brokerage、buying power、settlement、margin 为什么属于策略现实性。
- [QuantConnect: LEAN Algorithm Engine](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/algorithm-engine)
  阅读目标：理解事件驱动回测如何按时间前沿推进，并把数据切片、订单、成交和组合状态串起来。
- [scikit-learn: TimeSeriesSplit](https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split)
  阅读目标：解释为什么时间序列不能随机打乱，为什么应使用过去训练、未来测试。
- [Bailey et al.: The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
  阅读目标：解释测试很多参数为什么会制造漂亮但脆弱的回测。

**主动输出**

拿你的第一张策略卡，写出它最容易出现的三个偏差，以及每个偏差如何用数据流程或实验设计控制。

**本课隐含假设**

我们假设历史模拟可以发现部分坏想法。反例是稀有灾难、制度突变和流动性崩塌，它们可能在样本外才第一次出现。

## 课程 5：期货基础与商品过渡

**目标**：理解合约、保证金、到期、移仓、连续合约、期限结构和 COT。

**为什么排第五**：你未来可能处理有色金属，但先要理解期货和股票的结构性差异。

**核心阅读**

- [CME: Definition of a Futures Contract](https://www.cmegroup.com/education/courses/introduction-to-futures/definition-of-a-futures-contract)
  阅读目标：说明期货合约为什么是标准化的、会到期的、由交易所和清算机制支撑的交易对象。
- [CME: Margin - Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)
  阅读目标：解释期货保证金不是买股票的首付，而是履约保证和风险缓冲。
- [CFTC: Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)
  阅读目标：解释 COT 是参与者结构数据，不是直接买卖信号。
- [QuantConnect: Futures Universes and Continuous Contracts](https://www.quantconnect.com/docs/v2/writing-algorithms/securities/asset-classes/futures/requesting-data/universes)
  阅读目标：解释为什么连续合约可用于指标，具体 mapped 合约才用于交易。

**主动输出**

把一张股票策略卡改写成期货策略卡，新增四栏：合约月份、保证金/名义价值、移仓规则、期限结构风险。

**本课隐含假设**

我们假设先用期货机制作为商品入门。反例是现货贸易和库存金融，它们的核心变量不只是交易所合约，还有仓储、物流、信用、付款和点价流程。

## 课程 6：仓位与风险预算

**目标**：理解为什么“方向判断对”不等于“仓位应该大”，并掌握固定比例、波动率目标和 Kelly/分数 Kelly 的基本思想。

**为什么排第六**：策略收益的波动、回撤和生存概率主要由仓位决定，而不是由入场信号单独决定。

**核心阅读**

- [QuantConnect: Risk Management Key Concepts](https://www.quantconnect.com/docs/v2/writing-algorithms/algorithm-framework/risk-management/key-concepts)
  阅读目标：解释风险模块如何在投资组合目标之后调整或取消风险过高的目标。
- [QuantConnect: Position Sizing](https://www.quantconnect.com/docs/v2/writing-algorithms/trading-and-orders/position-sizing)
  阅读目标：区分目标权重、数量下单、名义价值和可用资金。
- [Kelly Criterion: From a Simple Random Walk to Levy Processes](https://arxiv.org/abs/2002.03448)
  阅读目标：解释 Kelly 思想是最大化长期对数财富增长，而不是“永远满仓”。
- [Kelly 1956: A New Interpretation of Information Rate](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)
  阅读目标：理解 Kelly 仓位思想的原始问题是长期增长率，而不是单次交易胜率。
- [On Kelly Betting: Some Limitations](https://arxiv.org/abs/1710.01787)
  阅读目标：解释为什么参数估计误差、回撤和心理承受力会让分数 Kelly 更现实。

**主动输出**

用自己的话解释：同一个胜率和赔率假设下，为什么 1 倍仓位、0.25 倍仓位、满 Kelly 和 2 倍 Kelly 的长期体验完全不同。

**本课隐含假设**

我们假设可以从历史数据估计风险和边际优势。反例是边际优势根本不存在、风险分布尾部很厚，或未来波动结构和历史完全不同。

## 课程 7：组合构建与分散化

**目标**：理解单策略、单资产、组合、相关性、风险平价、均值方差和 1/N 基线。

**为什么排第七**：实盘研究不是只问一个信号赚不赚钱，还要问多个信号和资产放在一起是否降低脆弱性。

**核心阅读**

- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
  阅读目标：观察因子组合和排序组合如何作为研究对象，而不是单只股票观点。
- [Markowitz Nobel lecture: Foundations of Portfolio Theory](https://www.nobelprize.org/prizes/economic-sciences/1990/markowitz/lecture/)
  阅读目标：解释为什么组合风险取决于协方差结构，而不只是单个资产自己的波动。
- [DeMiguel, Garlappi, Uppal: Optimal Versus Naive Diversification](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901)
  阅读目标：解释为什么复杂均值方差优化经常难以战胜简单 1/N 基线。
- [AQR: Betting Against Beta](https://www.aqr.com/Insights/Research/Journal-Article/Betting-Against-Beta)
  阅读目标：理解杠杆约束和低 beta 异象如何挑战“高风险一定高收益”的直觉。
- [Machine Learning for Asset Managers](https://www.cambridge.org/core/books/machine-learning-for-asset-managers/6D9211305EA2E425D33A9F38D0AE3545)
  阅读目标：重点理解“策略应来自理论，而不只是回测规则”，以及 ML 在资产管理中帮助发现结构的定位。
- [Machine Learning for Factor Investing](https://www.mlfactor.com/)
  阅读目标：理解因子投资如何把资产特征、预测、组合回测和解释性连接起来。

**主动输出**

解释为什么“十个看起来不错的策略”可能组合后仍然很危险：它们可能在同一个市场状态同时亏损。

**本课隐含假设**

我们假设相关性和协方差有一定稳定性。反例是危机时期相关性上升、流动性消失，分散化在最需要时失效。

## 课程 8：交易成本、流动性与执行

**目标**：理解手续费、买卖价差、滑点、市场冲击、成交模型和容量。

**为什么排第八**：很多策略不是没有信号，而是扣除成本后没有可交易优势。

**核心阅读**

- [Investor.gov: Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)
  阅读目标：复述市价单保证执行但不保证价格，限价单保证价格但不保证执行。
- [Investor.gov: Executing an Order](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order)
  阅读目标：追踪订单从投资者、经纪商到交易场所的路径，并理解订单路由不是抽象细节。
- [QuantConnect: Reality Modeling](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/key-concepts)
  阅读目标：把 fills、slippage、fees、brokerage、buying power 等列成执行现实性清单。
- [QuantConnect: Trading and Orders](https://www.quantconnect.com/docs/v2/writing-algorithms/trading-and-orders/key-concepts)
  阅读目标：理解订单、订单事件、下单前检查和交易统计。
- [Almgren and Chriss: Optimal Execution of Portfolio Transactions](https://www.smallake.kr/wp-content/uploads/2016/03/optliq.pdf)
  阅读目标：用执行风险、临时冲击和永久冲击理解为什么大单不能只按理想价格成交。
- [Cboe Daily Market Statistics](https://www.cboe.com/markets/us/options/market-statistics/daily)
  阅读目标：观察成交量、未平仓量、put/call ratio 如何成为市场活动数据。

**主动输出**

把一个“日频均线策略”解释成两种版本：理想回测版和现实执行版。指出二者差在哪些成本和成交假设上。

**本课隐含假设**

我们假设策略规模还小，市场冲击可以先近似处理。反例是大资金、低流动性品种、事件日或极端行情，执行本身会改变价格。

## 课程 9：统计验证、过拟合与模型失败

**目标**：理解 Sharpe、最大回撤、p 值、多重检验、样本外、walk-forward、模型选择和失败复盘。

**为什么排第九**：当你能写很多策略时，最大风险从“没想法”变成“被漂亮回测骗”。

**核心阅读**

- [Bailey & Lopez de Prado: The Deflated Sharpe Ratio](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551)
  阅读目标：解释为什么选择偏差、多重检验和非正态收益会让普通 Sharpe 过度乐观。
- [Bailey et al.: The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
  阅读目标：解释为什么从大量策略或参数里挑出的赢家，需要先被视为受污染的统计结果。
- [Harvey, Liu, Zhu: ... and the Cross-Section of Expected Returns](https://academic.oup.com/rfs/article/29/1/5/1843824)
  阅读目标：理解因子挖掘越多，统计显著性门槛越应提高。
- [scikit-learn: TimeSeriesSplit](https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split)
  阅读目标：把时间序列验证讲成“过去只训练，未来才测试”的纪律。
- [QuantConnect: Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)
  阅读目标：把研究偏差转成策略研究 checklist。

**主动输出**

假设你测试了 100 个参数组合，只有一个 Sharpe 很漂亮。用费曼法解释为什么这不等于找到了好策略。

**本课隐含假设**

我们假设统计检验能降低自欺风险。反例是结构性变化、数据缺失、隐藏成本和不可观测约束，它们不是单靠 p 值能解决的。

**打破本课假设的思想**

White Reality Check、Hansen SPA 等检验把重点放在“多个模型比较后的显著性”，而贝叶斯和结构模型路线会更强调先验机制、状态切换和模型不确定性，而不是单一回测指标。

## 课程 10：从通用框架过渡到期货和有色金属应用

**目标**：把前九课的通用框架迁移到商品，尤其是铜和有色金属，但不让专业化取代基础框架。

**为什么排第十**：到这里你已经有信号、数据、回测、风险、执行的骨架，才适合引入产业链、库存、基差、升贴水和现货贸易数据。

**核心阅读**

- [LME Copper](https://www.lme.com/en/metals/non-ferrous/lme-copper)
  阅读目标：识别铜合约、报价、实物交割、仓库体系和官方价格的作用。
- [LME Warehouse and Stock Reports](https://www.lme.com/en/Market-data/Reports-and-data/Warehouse-and-stocks-reports)
  阅读目标：解释库存、仓单、注销仓单和仓库报告如何成为供需线索。
- [International Copper Study Group](https://icsg.org/)
  阅读目标：理解铜的生产、使用、贸易、库存和价格统计为何构成产业基本面。
- [CME Copper Futures](https://www.cmegroup.com/markets/metals/base/copper.contractSpecs.html)
  阅读目标：比较同一商品在不同交易所的合约规格、交易时间、流动性和交割规则。
- [Gorton and Rouwenhorst: Facts and Fantasies About Commodity Futures](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=560042)
  阅读目标：区分商品现货价格变化和商品期货收益来源，不把“看多铜价”误写成所有商品期货策略。
- [NBER: Facts and Fantasies About Commodity Futures](https://www.nber.org/papers/w10595)
  阅读目标：用更稳定的论文入口复习 collateral return、spot return 和 roll/carry 直觉。
- [EIA Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/)
  阅读目标：以原油库存为类比，学习如何把官方库存发布时间表转成事件特征，再迁移到金属库存数据。

**主动输出**

写一张“铜期货研究卡”：把一个现货贸易变量放入 alpha、过滤器、仓位或风控中的某一层，并说明它的数据可见时间和合规边界。

**本课隐含假设**

我们假设现货数据能在授权、脱敏和时间戳清楚的前提下用于辅助研究。反例是数据涉及客户秘密、不可用于个人交易、时间戳不可信，或业务流程变化导致历史不可比。

## NotebookLM 使用方式

每课建立一个独立 NotebookLM source bundle：

1. 课程 HTML 或本总纲对应段落。
2. 2-4 个核心阅读链接。
3. 对应 reference HTML。
4. 对应 research note。

每课问 NotebookLM 三个固定问题：

- “请用中文列出本课最重要的 5 个概念，并说明它们之间的因果/流程关系。”
- “请生成 10 个主动回忆问题，答案不要太长。”
- “请指出本课框架的隐含假设，以及哪些市场情景会让这些假设失效。”

完成标准：你能不用资料，用 3-5 分钟解释本课为什么在整个策略研究链条中不可缺少。
