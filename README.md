# Stocks

Stock trading simulation through a command line interface.

## Stack

Node
Testing with Mocha and Sinon

## MVP

View stock prices
-   Store API key
-   Show current price of stock
-   Show list of stocks to view using search

Purchase and Sell Stocks
-   Have a wallet with a balance
-   Add and remove from balance
-   Have a portfolio
-   Add and remove from portfolio

## Setup

clone the repo 
in the repo run `sudo npm link` and enter your password
run `npm install`

to run the program type `stocks`

## Commands

#### Set the API key

```shell
~ stocks key set
? Enter API Key (https://www.alphavantage.co/) 1234
API key set.
~
```

#### Get the API key

```shell
~ stocks key get
1234
~
```

#### Get stock price

Execute the command with the `--code` option passing a stock code (e.g. `--code IBM`) to see the current price of the stock

```shell
~ stocks check price --code <Stock Code>
<Stock Code> Price: 105.0000
~
```
##### Options (TODO)

Pass options to see additional measures such as the high/low points for the day

```shell
~ stocks check price --code IBM --measure <measure codes>
<Stock Code> High: 110.0000
<Stock Code> Low: 100.0000
```

Measure options include
-   [h]igh, high point of stock value 
-   [l]ow, low point of stock value
-   [o]pen, opening price of stock
-   [p]rice, current price of stock

default measure is price

#### Search Stock codes

TODO

#### Add to wallet

TODO

#### Add to portfolio

TODO

#### Sell from portfolio

TODO
