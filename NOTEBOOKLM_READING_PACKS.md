# NotebookLM Reading Packs

每一课建议单独建一个 NotebookLM notebook。不要一次塞完整课程；主动输出会被稀释。每个 pack 包含本课程文件、一个 reference、2-4 个核心外部来源。

全局研究索引：`research/0003-community-recommended-reading-packs.md`。如果某一课需要加深阅读，先把该文件对应主题段落加入 NotebookLM，再加入本课的 3-5 个核心来源。

## Pack 1: 策略假设卡

- `lessons/0001-from-idea-to-testable-hypothesis.html`
- `reference/0001-quant-trading-glossary.html`
- [Investor.gov: Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)
- [Investor.gov: What is Risk?](https://www.investor.gov/introduction-investing/investing-basics/what-risk)
- [QuantStart: Successful Algorithmic Trading](https://www.quantstart.com/successful-algorithmic-trading-ebook/)
- [Trading and Exchanges: Market Microstructure for Practitioners](https://global.oup.com/academic/product/trading-and-exchanges-9780195144703)

主动输出：解释为什么“观点”必须变成可检验假设卡。

## Pack 2: 市场信号地图

- `lessons/0002-market-signal-map-to-first-card.html`
- `reference/0003-market-signal-map.html`
- `research/0001-market-signal-map-sources.md`
- [AQR: Time Series Momentum](https://www.aqr.com/Insights/Research/Journal-Article/Time-Series-Momentum)
- [AQR: Fact, Fiction and Momentum Investing](https://www.aqr.com/Insights/Research/Journal-Article/Fact-Fiction-and-Momentum-Investing)
- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)

主动输出：画出七类信号，并说明每类信号适合做 alpha、过滤器、仓位还是执行约束。

## Pack 3: Python 金融数据工作流

- `lessons/0003-python-financial-data-workflow.html`
- `reference/0004-python-financial-data-workflow.html`
- [Python for Data Analysis, 3E](https://wesmckinney.com/book/)
- [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html)
- [pandas Windowing operations](https://pandas.pydata.org/docs/user_guide/window.html)

主动输出：从 CSV 到策略收益，解释每一步转换和每一步可能出错的地方。

## Pack 4: 回测与偏差控制

- `lessons/0004-minimal-backtest-and-bias-control.html`
- `reference/0005-backtest-bias-checklist.html`
- [QuantConnect Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)
- [QuantConnect Algorithm Engine](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/algorithm-engine)
- [The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
- [scikit-learn TimeSeriesSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)

主动输出：解释事件驱动回测中的 time frontier，并指出 toy pandas 回测最容易在哪里偷看未来。

## Pack 5: 期货基础

- `lessons/0005-futures-basics-and-commodities-bridge.html`
- `reference/0006-futures-basics-bridge.html`
- [CME: Introduction to Futures](https://www.cmegroup.com/education/courses/introduction-to-futures)
- [CME: Margin - Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)
- [CFTC Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)

主动输出：选择一个期货合约，解释 tick size、multiplier、notional exposure、margin 和 roll date。

## Pack 6: 仓位与风险预算

- `lessons/0006-position-sizing-and-risk-budget.html`
- [QuantConnect Risk Management](https://www.quantconnect.com/docs/v2/writing-algorithms/algorithm-framework/risk-management/key-concepts)
- [QuantConnect Position Sizing](https://www.quantconnect.com/docs/v2/writing-algorithms/trading-and-orders/position-sizing)
- [Kelly 1956: A New Interpretation of Information Rate](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)
- [Kelly Criterion: From a Simple Random Walk to Levy Processes](https://arxiv.org/abs/2002.03448)
- [On Kelly Betting: Some Limitations](https://arxiv.org/abs/1710.01787)

主动输出：解释为什么一个方向信号必须配仓位规则，否则策略定义不完整。

## Pack 7: 组合构建

- `lessons/0007-portfolio-construction-and-diversification.html`
- [Markowitz Nobel lecture: Foundations of Portfolio Theory](https://www.nobelprize.org/prizes/economic-sciences/1990/markowitz/lecture/)
- [Optimal Versus Naive Diversification](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901)
- [Machine Learning for Factor Investing](https://www.mlfactor.com/)
- [AQR: Value and Momentum Everywhere](https://www.aqr.com/Insights/Research/Journal-Article/Value-and-Momentum-Everywhere)
- [AQR: Betting Against Beta](https://www.aqr.com/Insights/Research/Journal-Article/Betting-Against-Beta)

主动输出：解释为什么组合风险取决于协方差，而不是单个资产风险的简单平均。

## Pack 8: 成本、流动性与执行

- `lessons/0008-costs-liquidity-and-execution.html`
- [Trading and Exchanges: Market Microstructure for Practitioners](https://global.oup.com/academic/product/trading-and-exchanges-9780195144703)
- [Investor.gov: Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)
- [Investor.gov: Executing an Order](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order)
- [QuantConnect Reality Modeling](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/key-concepts)
- [QuantConnect Trading and Orders](https://www.quantconnect.com/docs/v2/writing-algorithms/trading-and-orders/key-concepts)
- [Almgren and Chriss: Optimal Execution of Portfolio Transactions](https://www.smallake.kr/wp-content/uploads/2016/03/optliq.pdf)

主动输出：用玩具订单簿解释 spread、market order、limit order、slippage 和 market impact。

## Pack 9: 统计验证与模型失败

- `lessons/0009-statistical-validation-and-model-failure.html`
- [The Deflated Sharpe Ratio](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551)
- [The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
- [Harvey, Liu, Zhu: ... and the Cross-Section of Expected Returns](https://academic.oup.com/rfs/article/29/1/5/1843824)
- [scikit-learn TimeSeriesSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)
- [QuantConnect Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)

主动输出：解释为什么测试 100 个策略后挑最好一个，会改变你对 Sharpe 的信任。

## Pack 10: 铜与有色金属应用

- `lessons/0010-commodities-and-copper-application-bridge.html`
- `reference/0002-copper-futures-and-spot-data-map.html`
- [LME Copper](https://www.lme.com/en/metals/non-ferrous/lme-copper)
- [LME Warehouse and Stock Reports](https://www.lme.com/en/Market-data/Reports-and-data/Warehouse-and-stocks-reports)
- [International Copper Study Group](https://icsg.org/)
- [CME Copper Futures](https://www.cmegroup.com/markets/metals/base/copper.contractSpecs.html)
- [Facts and Fantasies About Commodity Futures](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=560042)
- [NBER: Facts and Fantasies About Commodity Futures](https://www.nber.org/papers/w10595)
- [CFTC Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)
- [EIA Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/)

主动输出：写一张铜期货研究卡，并说明现货数据的可见时间、授权边界和合规风险。

## 固定提问模板

每个 NotebookLM pack 都问这三类问题：

1. “请用中文解释本课 5 个关键概念，并画出它们的依赖关系。”
2. “请给我 10 个主动回忆问题，答案控制在 2-4 句话。”
3. “请指出本课框架的隐含假设，以及哪些市场情景会打破这些假设。”
