# Lessons 3-5 Sources

This note collects primary sources for the third, fourth, and fifth lessons. It complements [0001-market-signal-map-sources.md](0001-market-signal-map-sources.md).

## Lesson 3: Python and pandas financial data workflow

- [pandas: read/write tabular data](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html)
  Use for reading CSV data with `read_csv`, then checking `head`, `dtypes`, and `info` before calculating anything.
- [pandas: time series/date functionality](https://pandas.pydata.org/docs/user_guide/timeseries.html)
  Use for `DatetimeIndex`, date parsing, resampling, time zones, and business-day thinking.
- [pandas: DataFrame.pct_change](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.pct_change.html)
  Use for turning price into fractional return. The course should explicitly say this is fractional change, not already multiplied by 100.
- [pandas: windowing operations](https://pandas.pydata.org/docs/user_guide/window.html)
  Use for rolling windows, expanding windows, exponentially weighted windows, moving averages, and rolling volatility.
- [pandas: DataFrame.shift](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shift.html)
  Use for the first anti-lookahead rule: a signal known after today's close should be shifted before it is applied to next-period returns.
- [NumPy: the absolute basics](https://numpy.org/doc/stable/user/absolute_beginners.html)
  Use to explain vectorized array thinking to a learner with C++/Java background.

## Lesson 4: Minimal backtest mechanics and bias controls

- [QuantConnect: Time Modeling - Periods](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/time-modeling/periods)
  Use for bar timing: a period has start and end time, and the close is only known after the period ends.
- [QuantConnect: Timeslices](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/time-modeling/timeslices)
  Use to contrast vectorized toy backtests with event-driven backtests where the algorithm only receives current and past slices.
- [QuantConnect: Reality Modeling](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/key-concepts)
  Use as the checklist for fills, slippage, fees, brokerage, buying power, settlement, short availability, margin, and capacity.
- [QuantConnect: Research Guide](https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/research-guide)
  Use for look-ahead bias, survivorship bias, overfitting, outliers, and paper-trading discipline.
- [scikit-learn: TimeSeriesSplit](https://scikit-learn.org/stable/modules/cross_validation.html#time-series-split)
  Use for time-ordered validation. The important lesson is "past trains, future tests"; do not randomly shuffle financial time series.
- [Bailey et al.: The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253)
  Use to warn that many strategy trials can manufacture an attractive backtest.
- [Bailey and Lopez de Prado: The Deflated Sharpe Ratio](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2460551)
  Use to explain that Sharpe ratio can be inflated by selection bias, multiple testing, and non-normal returns.

## Lesson 5: Futures basics and commodity bridge

- [CME: Definition of a Futures Contract](https://www.cmegroup.com/education/courses/introduction-to-futures/definition-of-a-futures-contract)
  Use for standardized contract, delivery month, exchange trading, central clearing, and price discovery.
- [CME: Margin - Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)
  Use to explain that futures margin is not a stock down payment. It is capital deposited and kept with the broker to hold a futures position, and margin calls can force liquidation.
- [CFTC: Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)
  Use for COT reports, trader categories, open interest, reportable positions, and historical positioning data.
- [QuantConnect: Futures Universes and Continuous Contracts](https://www.quantconnect.com/docs/v2/writing-algorithms/securities/asset-classes/futures/requesting-data/universes)
  Use to explain continuous futures series, mapped tradable contracts, and why adjusted continuous prices are not directly tradable.
- [QuantConnect: Futures Handling Data](https://www.quantconnect.com/docs/v2/writing-algorithms/securities/asset-classes/futures/handling-data)
  Use for rollovers, contract changes, and event handling around mapped contracts.
- [LME Copper](https://www.lme.com/en/metals/non-ferrous/lme-copper)
  Use only as a bridge example at the end of lesson 5, so the course does not become overly specific too early.
- [CME Copper Futures](https://www.cmegroup.com/markets/metals/base/copper.contractSpecs.html)
  Use to show that the same commodity can have different exchange contracts and specifications.

