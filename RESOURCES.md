# 量化交易 Resources

## Knowledge

- [Investor.gov: Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)
  SEC 投资者教育材料，解释市价单、限价单、止损单。Use for: 订单类型、成交价格风险、把回测成交假设和真实下单连接起来。
- [Investor.gov: What is Risk?](https://www.investor.gov/introduction-investing/investing-basics/what-risk)
  SEC 投资者教育材料，解释投资风险、波动风险、流动性风险等基础概念。Use for: 风险语言和小资金实盘前的风险框架。
- [FINRA: Frequent Intraday Trading: Understanding the Basics](https://www.finra.org/investors/insights/frequent-intraday-trading)
  FINRA 2026-06-04 投资者材料，解释频繁日内交易、现金账户、保证金账户、T+1 结算和风险。Use for: 小资金实盘验证前的账户和监管风险检查。
- [Bailey, Borwein, Lopez de Prado, Zhu: The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
  经典论文，说明投资策略回测中的过拟合概率问题。Use for: 为什么不能只看一个漂亮回测曲线。
- [AQR: Time Series Momentum](https://www.aqr.com/Insights/Research/Journal-Article/Time-Series-Momentum)
  Journal of Financial Economics 论文页面，研究一个资产自身过去收益对未来收益的预测性，覆盖股指、货币、商品和债券期货/远期。Use for: 趋势/动量信号的基础阅读。
- [AQR: Fact, Fiction and Momentum Investing](https://www.aqr.com/Insights/Research/Journal-Article/Fact-Fiction-and-Momentum-Investing)
  Journal of Portfolio Management 文章页面，用更入门的方式讨论动量现象、常见误解和数据证据。Use for: 先理解“过去强者继续强”这种信号在说什么。
- [AQR: Value and Momentum Everywhere](https://www.aqr.com/Insights/Research/Journal-Article/Value-and-Momentum-Everywhere)
  Journal of Finance 论文页面，讨论价值和动量在多资产类别中的共同性。Use for: 理解信号可以跨股票、债券、外汇、商品迁移，但不能直接照搬。
- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
  Fama/French 因子与动量因子数据源。Use for: 学习因子命名、因子数据结构、动量/价值/规模/盈利/投资等信号。
- [Cboe VIX](https://www.cboe.com/tradable-products/vix)
  Cboe 官方 VIX 页面，解释 VIX 是由 S&P 500 期权价格反映的近期期望波动率，并提供 VIX 期货/期权相关资料。Use for: 波动率、恐慌/风险偏好、期权隐含信息。
- [Cboe Daily Market Statistics](https://www.cboe.com/markets/us/options/market-statistics/daily)
  Cboe 官方日度期权市场统计，含总量、看跌/看涨比率、指数/ETF/个股期权量和未平仓量。Use for: 期权情绪和市场参与度。
- [FRED: What is FRED?](https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred/)
  圣路易斯联储官方说明，解释 FRED 经济时间序列、ALFRED 历史版本数据、频率聚合和单位转换。Use for: 宏观/利率/通胀变量和避免宏观数据修订造成未来函数。
- [CFTC Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)
  CFTC 官方 COT 报告说明，包含期货/期权持仓、交易者分类、历史数据和 API。Use for: 期货市场参与者结构、管理资金/商业套保者持仓变化。
- [CME: Definition of a Futures Contract](https://www.cmegroup.com/education/courses/introduction-to-futures/definition-of-a-futures-contract)
  CME 官方期货入门材料，解释标准化合约、交割规格、交易所撮合和中央清算。Use for: 期货策略卡中的合约、流动性、交割和风险基础。
- [QuantConnect Docs: Writing Algorithms](https://www.quantconnect.com/docs/v2/writing-algorithms)
  LEAN/QuantConnect 官方文档。Use for: 后续学习标准化策略结构、历史数据、订单、组合和实盘/纸面交易流程。
- [QuantConnect Docs: Reality Modeling](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/key-concepts)
  官方文档，解释回测中填单、滑点、费用、券商、购买力等现实模型。Use for: 从玩具回测过渡到更真实的模拟。
- [QuantConnect Docs: Pre-trade Risk Control](https://www.quantconnect.com/docs/v2/writing-algorithms/trading-and-orders/pre-trade-risk-control)
  官方文档，解释下单前的交易检查。Use for: 实盘前的订单有效性、购买力和券商约束意识。
- [QuantConnect Docs: Paper Trading](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/brokerages/supported-models/quantconnect-paper-trading)
  官方文档，解释 QuantConnect 纸面交易模型。Use for: 小资金实盘前的纸面交易阶段。
- [LME Copper](https://www.lme.com/en/metals/non-ferrous/lme-copper)
  伦敦金属交易所铜合约官方页面。Use for: 铜的全球基准价、LME 铜合约、现货交割、仓库体系、库存报告和 COTR 等金属市场核心资料。
- [LME Physical Market Benefits](https://www.lme.com/en/Sustainability-and-Physical-Markets/Physical-market-benefits)
  LME 官方解释其在实物金属市场中的套保、价格发现、价格收敛和参考定价功能。Use for: 理解为什么有色金属期货和现货贸易流程必须放在一起学。
- [LME Warehouse and Stock Reports](https://www.lme.com/en/Market-data/Reports-and-data/Warehouse-and-stocks-reports)
  LME 官方仓单、库存、出入库、等待时间、注销仓单等报告说明。Use for: 铜库存和仓单变化作为量化参考变量。
- [International Copper Study Group](https://icsg.org/)
  政府间铜研究组织，维护铜的生产、使用、贸易、库存和价格统计数据库，并发布 Copper Factbook。Use for: 铜产业链基本面和供需框架。
- [CME Copper Futures](https://www.cmegroup.com/markets/metals/base/copper.contractSpecs.html)
  CME/COMEX 铜期货官方页面。Use for: 北美铜期货、全球铜价格链、成交量/持仓、CME 铜波动率和市场工具。
- [CFTC](https://www.cftc.gov/)
  美国商品期货监管机构，提供 COT 持仓报告、市场监管和衍生品监管资料。Use for: 期货监管、交易者结构、COT 数据和合规意识。
- [Python Tutorial](https://docs.python.org/3/tutorial/)
  Python 官方教程，面向已经会编程但不熟悉 Python 的学习者。Use for: 快速补 Python 语法。
- [NumPy: the absolute basics for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)
  NumPy 官方入门材料。Use for: 数组、向量化和收益率计算。
- [pandas Getting Started Tutorials](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html)
  pandas 官方入门材料。Use for: 表格数据、时间序列、CSV、统计汇总和画图。
- [pandas: How do I read and write tabular data?](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html)
  pandas 官方教程，解释 `read_csv`、`head`、`dtypes`、`info` 等数据读取和检查动作。Use for: 第 3 课读取价格数据后的第一轮数据质量检查。
- [pandas: Time series / date functionality](https://pandas.pydata.org/docs/user_guide/timeseries.html)
  pandas 官方时间序列指南，覆盖日期解析、时区、重采样和业务日。Use for: 金融数据时间索引、交易日和频率处理。
- [pandas: DataFrame.pct_change](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.pct_change.html)
  pandas API 文档，解释 fractional change。Use for: 价格到收益率的第一条公式。
- [pandas: Windowing operations](https://pandas.pydata.org/docs/user_guide/window.html)
  pandas 官方窗口操作指南，覆盖 rolling、expanding、ewm。Use for: 移动均线、滚动波动率和滚动统计量。
- [pandas: DataFrame.shift](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shift.html)
  pandas API 文档，解释沿轴移动索引或数据。Use for: 信号延迟执行和避免未来函数。
- [QuantConnect Docs: Time Modeling - Periods](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/time-modeling/periods)
  官方文档，解释时间 period 和 bar 可见时间。Use for: 第 4 课说明 close 何时可见。
- [QuantConnect Docs: Timeslices](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/time-modeling/timeslices)
  官方文档，解释事件驱动回测中的当前 slice。Use for: 对比 pandas toy backtest 和真实事件驱动框架。
- [QuantConnect Docs: Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)
  官方研究指南，包含假设驱动研究、过拟合、未来函数、幸存者偏差和异常值。Use for: 第 4 课回测偏差清单。
- [scikit-learn: TimeSeriesSplit](https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split)
  scikit-learn 官方文档，说明时间序列样本存在自相关，经典 KFold/ShuffleSplit 不适合直接使用，并提供 TimeSeriesSplit。Use for: 样本内/样本外和 walk-forward 思维。
- [Bailey & Lopez de Prado: The Deflated Sharpe Ratio](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551)
  论文页面，讨论选择偏差、回测过拟合和非正态收益下的 Sharpe 修正。Use for: 第 4 课说明 Sharpe 不能单独证明策略质量。
- [CME: Margin - Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)
  CME 官方期货入门材料，解释期货保证金不是证券保证金式首付，并介绍初始保证金、维持保证金和 margin call。Use for: 第 5 课期货杠杆和风险。
- [QuantConnect Docs: Futures Universes and Continuous Contracts](https://www.quantconnect.com/docs/v2/writing-algorithms/securities/asset-classes/futures/requesting-data/universes)
  官方文档，说明连续期货、mapped 合约和合约筛选。Use for: 第 5 课连续合约用于指标、具体合约用于交易。
- [QuantConnect Docs: Futures Handling Data](https://www.quantconnect.com/docs/v2/writing-algorithms/securities/asset-classes/futures/handling-data)
  官方文档，说明期货数据处理、移仓和合约变化。Use for: 第 5 课主力合约和 rollover。
- [Georgia Tech CS7646: Machine Learning for Trading](https://lucylabs.gatech.edu/ml4t/)
  公开大学课程，覆盖 Python 金融数据、市场数据、组合优化、策略评估和机器学习交易工作流。Use for: 十课之外的系统课程脊柱。
- [Python for Data Analysis, 3E](https://wesmckinney.com/book/)
  pandas 作者 Wes McKinney 的开放 HTML 版数据分析教材。Use for: 第 3 课 Python/pandas 金融数据工作流。
- [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html)
  pandas 官方用户指南。Use for: 时间序列、窗口统计、缺失值和数据转换。
- [Trading and Exchanges: Market Microstructure for Practitioners](https://global.oup.com/academic/product/trading-and-exchanges-9780195144703)
  Larry Harris 的市场微观结构经典教材。Use for: 第 1 课市场机制语言和第 8 课订单、价差、流动性、执行。
- [Investor.gov: Executing an Order](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order)
  SEC 投资者教育材料，解释订单从投资者到经纪商和交易场所的执行路径。Use for: 第 8 课订单路由和成交现实性。
- [QuantConnect Docs: LEAN Algorithm Engine](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/algorithm-engine)
  官方文档，解释 LEAN 事件驱动引擎如何推进时间、分发数据、处理订单和更新组合。Use for: 第 4 课从 pandas toy backtest 过渡到事件驱动回测。
- [QuantConnect Docs: Position Sizing](https://www.quantconnect.com/docs/v2/writing-algorithms/trading-and-orders/position-sizing)
  官方文档，解释目标权重、数量、名义价值和持仓调整。Use for: 第 6 课仓位规则。
- [QuantConnect Docs: Risk Management Key Concepts](https://www.quantconnect.com/docs/v2/writing-algorithms/algorithm-framework/risk-management/key-concepts)
  官方文档，解释风险管理模块如何调整投资组合目标。Use for: 第 6 课风险预算和风控层。
- [Kelly 1956: A New Interpretation of Information Rate](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)
  Kelly 原始论文 DOI 页面。Use for: 第 6 课长期对数增长和仓位大小的关系。
- [Kelly Criterion: From a Simple Random Walk to Levy Processes](https://arxiv.org/abs/2002.03448)
  Kelly 准则的现代数学说明。Use for: 第 6 课把仓位问题与方向预测分离。
- [On Kelly Betting: Some Limitations](https://arxiv.org/abs/1710.01787)
  对 Kelly 应用局限的讨论。Use for: 第 6 课估计误差、回撤和分数 Kelly。
- [Markowitz Nobel lecture: Foundations of Portfolio Theory](https://www.nobelprize.org/prizes/economic-sciences/1990/markowitz/lecture/)
  Markowitz 诺奖讲座，解释均值方差和分散化思想。Use for: 第 7 课组合风险来自协方差结构。
- [DeMiguel, Garlappi, Uppal: Optimal Versus Naive Diversification](https://doi.org/10.1093/rfs/hhm075)
  关于优化组合和 1/N 简单组合样本外表现的经典论文。Use for: 第 7 课不要过早相信复杂优化。
- [AQR: Betting Against Beta](https://www.aqr.com/Insights/Research/Journal-Article/Betting-Against-Beta)
  关于杠杆约束和低 beta 异象的因子论文。Use for: 第 6-7 课风险、收益和约束的非线性关系。
- [Machine Learning for Factor Investing](https://www.mlfactor.com/)
  因子投资与机器学习的开放教材。Use for: 第 7 课理解资产特征、预测、组合回测和解释性。
- [Machine Learning for Asset Managers](https://www.cambridge.org/core/books/machine-learning-for-asset-managers/6D9211305EA2E425D33A9F38D0AE3545)
  Marcos Lopez de Prado 的资产管理机器学习教材页面。Use for: 第 7 课理解 ML 在结构发现和策略研究中的定位。
- [Almgren and Chriss: Optimal Execution of Portfolio Transactions](https://www.smallake.kr/wp-content/uploads/2016/03/optliq.pdf)
  经典执行论文，建模市场冲击和执行风险之间的权衡。Use for: 第 8 课大单执行、市场冲击和容量。
- [Harvey, Liu, Zhu: ... and the Cross-Section of Expected Returns](https://academic.oup.com/rfs/article/29/1/5/1843824)
  因子挖掘和多重检验的经典论文。Use for: 第 9 课提高统计显著性门槛。
- [CME: Introduction to Futures](https://www.cmegroup.com/education/courses/introduction-to-futures)
  CME 官方期货入门课程。Use for: 第 5 课合约规格、保证金、交割、套保者和投机者。
- [Gorton and Rouwenhorst: Facts and Fantasies About Commodity Futures](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=560042)
  商品期货资产类别的经典论文页面。Use for: 第 10 课区分现货商品价格和商品期货收益。
- [NBER: Facts and Fantasies About Commodity Futures](https://www.nber.org/papers/w10595)
  同一商品期货论文的 NBER 稳定入口。Use for: 第 10 课 collateral return、spot return 和 roll/carry。
- [EIA Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/)
  EIA 官方周度原油库存和供应报告。Use for: 第 10 课以油品库存事件类比金属库存事件特征。

## Wisdom (Communities)

- [Quantitative Finance Stack Exchange](https://quant.stackexchange.com/)
  高信噪比问答社区。Use for: 金融数学、市场微观结构、回测方法和术语澄清。
- [QuantConnect Community](https://www.quantconnect.com/forum)
  围绕 LEAN/QuantConnect 的实践社区。Use for: 平台问题、回测/纸面交易报错、策略工程结构。

## Gaps

- 还需要根据你未来选择的市场、券商、账户所在地和税务所在地，补充对应的一手监管和券商文档。
- 需要人工补齐上期所 SHFE 和上期能源 INE 的铜/国际铜合约页面；当前浏览环境访问官网遇到人机验证，不能可靠抓取具体合约条款。
- 需要明确现货贸易数据的授权边界、脱敏规则、可用字段、时间戳质量、是否允许用于交易研究，以及是否触及客户/交易对手保密义务。
