# Market Signal Map Sources

This note collects the first reading set for understanding a market signal map well enough to write a first strategy hypothesis card. The course should treat each signal as a hypothesis about future return, risk, liquidity, or execution conditions, not as a trading recommendation.

## How to read the map

A market signal becomes useful only after it answers four questions:

1. What market behavior is this trying to capture?
2. What data would have been visible at decision time?
3. What action would the signal change: direction, filter, sizing, or risk?
4. What result would falsify it?

For the first card, use one alpha signal and one simple risk filter. Do not combine many factors before you can explain what each factor contributes.

## Signal families

### 1. Trend and momentum

**Question:** Has recent price strength or weakness tended to continue?

Start with:

- [AQR: Time Series Momentum](https://www.aqr.com/Insights/Research/Journal-Article/Time-Series-Momentum)
  The authors describe "time series momentum" as a security's own past return predicting its future return across futures and forward contracts. Use this to understand trend-following logic in a cross-asset way.
- [AQR: Fact, Fiction and Momentum Investing](https://www.aqr.com/Insights/Research/Journal-Article/Fact-Fiction-and-Momentum-Investing)
  A more accessible paper on momentum, including common misconceptions and why trading costs and implementation matter.
- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
  Use the Momentum Factor and portfolio-sorted data to see how academic factor data is organized.

Strategy-card translation:

```text
If asset X has positive 12-month return excluding the most recent month, go long X next month.
Exit when the signal turns negative or after a fixed holding period.
```

Common mistakes:

- Accidentally using today's close to trade at today's close.
- Testing many lookback windows until one works.
- Ignoring transaction costs and turnover.

### 2. Mean reversion and reversal

**Question:** Has a move gone too far relative to a recent reference level?

Use this after trend, not before, because reversal is more sensitive to horizon. One-day reversal, multi-week reversal, and multi-year value reversal are different ideas.

Starter variables:

- Price deviation from moving average.
- Short-window return z-score.
- RSI-like overbought/oversold measures.
- Gap moves after large news or liquidation events.

Strategy-card translation:

```text
If a liquid index ETF falls more than 2 rolling standard deviations below its 20-day mean, buy for a 5-day rebound, but trade only when volatility is not in a crisis regime.
```

Common mistakes:

- Confusing "cheap" with "will rebound soon."
- Buying into a structural downtrend without a risk stop.
- Ignoring that reversals can disappear after costs.

### 3. Volatility and risk regime

**Question:** Is expected or realized uncertainty changing enough to alter exposure?

Start with:

- [Cboe VIX](https://www.cboe.com/tradable-products/vix)
  Cboe describes VIX as a measure of market expectations of near-term volatility conveyed by S&P 500 option prices. Use it as a risk-regime input, not as a direct stock-price forecast.
- [Cboe Daily Market Statistics](https://www.cboe.com/markets/us/options/market-statistics/daily)
  Use put/call ratios, options volume, and open interest to observe option-market positioning.

Strategy-card translation:

```text
If trend signal is positive, hold risk assets only when realized volatility is below its 60-day 80th percentile.
Reduce position size when volatility rises above that threshold.
```

Common mistakes:

- Treating high VIX as automatically bullish or bearish.
- Ignoring whether the signal is a direction signal or a sizing/risk filter.
- Using volatility as an entry signal when it is better suited as a risk throttle.

### 4. Volume, liquidity, and participation

**Question:** Is the move supported by enough trading activity and market participation?

Starter variables:

- Dollar volume and turnover.
- Volume percentile relative to recent history.
- Bid-ask spread or estimated transaction cost.
- Advance/decline breadth when studying equity indexes.

Use this mostly as a filter at the start. Low liquidity can make a signal impossible to implement even if the historical return looks attractive.

Strategy-card translation:

```text
Trade only assets whose 20-day average dollar volume exceeds a minimum threshold.
For index signals, require more advancing than declining constituents.
```

Common mistakes:

- Treating volume spike as always bullish.
- Backtesting illiquid assets at mid-price.
- Ignoring capacity: a signal can work for small size and fail for large size.

### 5. Macro, rates, and economic regime

**Question:** Is the background environment supportive or hostile for the strategy?

Start with:

- [FRED: What is FRED?](https://fredhelp.stlouisfed.org/fred/about/about-fred/what-is-fred/)
  FRED offers economic time series and tools; ALFRED provides historical vintages. Use ALFRED when revisions matter, because GDP, inflation, and similar series are often revised after initial release.

Starter variables:

- Treasury yields and yield spreads.
- Inflation and inflation expectations.
- Dollar index or exchange rates.
- Credit spreads and financial stress indexes.
- Employment and growth indicators.

Strategy-card translation:

```text
Only take cyclical-risk trades when the 10y-3m yield spread is not deeply inverted and credit stress is not widening.
```

Common mistakes:

- Using revised macro data as if it was known at the time.
- Adding macro variables that update monthly to a daily trading rule without aligning dates.
- Believing macro narratives without turning them into timestamped data.

### 6. Futures positioning and term structure

**Question:** What does the futures market say about hedgers, speculators, inventory pressure, or carry?

Start with:

- [CFTC Commitments of Traders](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)
  CFTC COT reports break open interest into trader categories and provide weekly historical data and a public reporting environment.
- [CME: Definition of a Futures Contract](https://www.cmegroup.com/education/courses/introduction-to-futures/definition-of-a-futures-contract)
  CME explains exchange-traded futures as standardized contracts with specified quality, quantity, delivery time, and location.

Starter variables:

- Net position by trader category.
- Open interest changes.
- Near-month versus far-month futures spread.
- Roll yield and carry.

Strategy-card translation:

```text
For a futures market, trade a price trend signal only when open interest is rising and the curve structure does not imply severe negative carry.
```

Common mistakes:

- Reading COT as a precise cause of future price movement.
- Forgetting COT is released Friday for Tuesday positions.
- Splicing futures contracts incorrectly when constructing continuous price series.

### 7. Fundamentals and valuation

**Question:** Is the asset cheap, expensive, profitable, or exposed to a structural economic driver?

Start with:

- [Kenneth French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
  Use Fama/French factor data to understand market, size, value, profitability, investment, and momentum as systematic return descriptors.
- [AQR: Value and Momentum Everywhere](https://www.aqr.com/Insights/Research/Journal-Article/Value-and-Momentum-Everywhere)
  Use this to see why value and momentum can be studied across asset classes, while still requiring asset-specific implementation.

Strategy-card translation:

```text
Rank a liquid stock universe by value and momentum; buy the top decile only if liquidity and risk filters pass.
```

Common mistakes:

- Mixing slow fundamental updates with daily timing signals.
- Using future financial statement values before their report date.
- Assuming a factor premium is a short-term timing tool.

## Implementation guardrails

- Use [QuantConnect Reality Modeling](https://www.quantconnect.com/docs/v2/writing-algorithms/reality-modeling/key-concepts) as the implementation checklist: fills, slippage, fees, brokerage, buying power, settlement, short availability, margin, and capacity.
- Read [The Probability of Backtest Overfitting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2326253) early. The key practical lesson is that testing many strategy variants can manufacture an attractive backtest.

## First-card recommendation

Your first strategy hypothesis card should be deliberately simple:

```text
Signal family:
Trend / time-series momentum.

Market:
One liquid, low-complexity asset such as SPY, or later one major futures contract after futures basics are learned.

Entry:
If the close is above its 200-day moving average and the 60-day return is positive, enter long on the next trading day.

Exit:
Exit when the close falls below the 200-day moving average, or after a fixed maximum holding period.

Risk filter:
If realized volatility is above its 60-day 80th percentile, cut position size by half or do not open new positions.

Position sizing:
Use a fixed small fraction of capital in backtest.

Costs:
Include transaction cost and slippage from the beginning.

Evaluation:
Annualized return, maximum drawdown, Sharpe ratio, turnover, number of trades, and sample-out period.
```

This is not proposed as a profitable strategy. It is a practice card because it forces you to define timing, visibility, costs, and falsification.
