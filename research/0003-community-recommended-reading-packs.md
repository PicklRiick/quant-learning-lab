# Community-Recommended Reading Packs

This note preserves the research results used to upgrade the course from five lessons to ten richer lessons. The selection favors stable official, author, publisher, university, exchange, regulator, and SSRN/NBER pages. These are appropriate for NotebookLM source packs because they are durable and have clear provenance.

## Core spine

- [Georgia Tech CS7646: Machine Learning for Trading](https://lucylabs.gatech.edu/ml4t/)
  Community value: a public university course built around Python financial data, computational investing, and machine-learning trading workflows.
  Fits: course spine, Python workflow, market data, validation.
  Active output: draw the pipeline from raw prices to orders, marking every leakage point.
- [Python for Data Analysis, 3E](https://wesmckinney.com/book/)
  Community value: written by pandas creator Wes McKinney; open HTML edition covers Python, NumPy, pandas, loading, cleaning, joins, plotting, groupby, and time series.
  Fits: lesson 3.
  Active output: explain each transformation in a small OHLCV cleaning notebook.
- [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html)
  Community value: canonical docs for the actual tool used in the course.
  Fits: lesson 3.
  Active output: produce a one-page "pandas for market data" cheat sheet.

## Market mechanism and execution

- [Trading and Exchanges: Market Microstructure for Practitioners](https://global.oup.com/academic/product/trading-and-exchanges-9780195144703)
  Community value: standard practitioner-friendly market microstructure text by Larry Harris.
  Fits: lessons 1 and 8.
  Active output: use a toy order book to explain why market orders pay the spread and limit orders may earn it.
- [Investor.gov: Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)
  Community value: regulator investor-education source for market, limit, and stop orders.
  Fits: lessons 1 and 8.
  Active output: explain execution certainty versus price certainty.
- [Investor.gov: Executing an Order](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order)
  Community value: regulator source on order routing and execution.
  Fits: lesson 8.
  Active output: trace an order from investor to broker to execution venue.
- [Almgren and Chriss: Optimal Execution of Portfolio Transactions](https://www.smallake.kr/wp-content/uploads/2016/03/optliq.pdf)
  Community value: canonical execution paper modeling the tradeoff between volatility risk and market impact.
  Fits: lesson 8.
  Active output: explain temporary impact, permanent impact, and execution-risk tradeoff.

## Signals and factors

- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
  Community value: default reproducible source for factor returns and benchmark portfolios.
  Fits: lessons 2 and 7.
  Active output: explain SMB, HML, RMW, CMA, and momentum as portfolio construction recipes.
- [AQR: Time Series Momentum](https://www.aqr.com/Insights/Research/Journal-Article/Time-Series-Momentum)
  Community value: canonical cross-asset trend-following paper.
  Fits: lessons 2 and 10.
  Active output: explain why own past returns can define a cross-asset signal.
- [AQR: Value and Momentum Everywhere](https://www.aqr.com/Insights/Research/Journal-Article/Value-and-Momentum-Everywhere)
  Community value: canonical cross-asset value/momentum framing.
  Fits: lessons 2 and 7.
  Active output: sketch a two-signal model where value and momentum diversify each other.
- [AQR: Betting Against Beta](https://www.aqr.com/Insights/Research/Journal-Article/Betting-Against-Beta)
  Community value: widely discussed factor paper about leverage constraints and low-beta effects.
  Fits: lessons 6 and 7.
  Active output: explain why higher beta is not automatically higher risk-adjusted return.

## Backtesting and validation

- [QuantConnect LEAN Algorithm Engine](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/algorithm-engine)
  Community value: practical open-source event-driven engine docs that contrast batch backtesting with streaming analysis.
  Fits: lesson 4.
  Active output: explain event-driven backtesting using time frontier, data slice, order fill, and portfolio update.
- [QuantConnect Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)
  Community value: practical checklist for look-ahead, survivorship, overfitting, outliers, and paper trading.
  Fits: lessons 4 and 9.
  Active output: turn the guide into a strategy-review checklist.
- [Bailey et al.: The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
  Community value: standard warning against strategy mining and overfitting.
  Fits: lessons 4 and 9.
  Active output: explain why the best of 100 tested strategies is contaminated by selection.
- [Bailey and Lopez de Prado: The Deflated Sharpe Ratio](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551)
  Community value: formalizes Sharpe adjustment for selection bias, multiple trials, and non-normality.
  Fits: lesson 9.
  Active output: explain why ordinary Sharpe is weaker after many trials.
- [scikit-learn TimeSeriesSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)
  Community value: canonical ML documentation for train-before-test time-series validation.
  Fits: lessons 4 and 9.
  Active output: draw random split, walk-forward split, and walk-forward with gap; label leakage.

## Risk and portfolio construction

- [Markowitz Nobel lecture: Foundations of Portfolio Theory](https://www.nobelprize.org/prizes/economic-sciences/1990/markowitz/lecture/)
  Community value: canonical mean-variance and diversification source.
  Fits: lesson 7.
  Active output: explain why covariance matters for portfolio risk.
- [DeMiguel, Garlappi, Uppal: Optimal Versus Naive Diversification](https://doi.org/10.1093/rfs/hhm075)
  Community value: often cited warning that optimized portfolios can fail to beat 1/N out of sample.
  Fits: lesson 7.
  Active output: compare equal-weight, inverse-vol, minimum-variance, and mean-variance portfolios.
- [Kelly 1956: A New Interpretation of Information Rate](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)
  Community value: original Kelly log-growth sizing paper.
  Fits: lesson 6.
  Active output: explain why sizing is separate from direction.
- [On Kelly Betting: Some Limitations](https://arxiv.org/abs/1710.01787)
  Community value: useful counterweight to full-Kelly enthusiasm.
  Fits: lesson 6.
  Active output: explain why estimation error and drawdowns justify fractional Kelly and hard risk caps.

## Futures and commodities

- [CME: Introduction to Futures](https://www.cmegroup.com/education/courses/introduction-to-futures)
  Community value: exchange-owned futures primer covering contract specs, tick value, notional value, margin, settlement, hedgers, and speculators.
  Fits: lesson 5.
  Active output: pick one CME contract and explain multiplier, tick value, notional exposure, margin, and roll date.
- [CFTC Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)
  Community value: official futures positioning data.
  Fits: lessons 5 and 10.
  Active output: explain why COT is structure data, not a direct signal.
- [Gorton and Rouwenhorst: Facts and Fantasies About Commodity Futures](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=560042)
  Community value: canonical commodity futures asset-class paper.
  Fits: lesson 10.
  Active output: explain why commodity futures returns differ from spot commodity price returns.
- [NBER: Facts and Fantasies About Commodity Futures](https://www.nber.org/papers/w10595)
  Community value: stable NBER page for the same commodity futures paper.
  Fits: lesson 10.
  Active output: separate collateral return, spot return, and roll/carry intuition.
- [EIA Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/)
  Community value: official event-data example for commodity inventories.
  Fits: lesson 10 as an oil analogy before metals.
  Active output: design an event calendar feature using inventory release timing.

## Suggested NotebookLM order

1. CS7646 plus McKinney/pandas.
2. Harris plus Investor.gov order materials.
3. French Data Library plus AQR papers.
4. LEAN docs plus Bailey/scikit-learn validation materials.
5. Markowitz/DeMiguel/Kelly risk materials.
6. CME/CFTC/Gorton-Rouwenhorst commodity materials.
