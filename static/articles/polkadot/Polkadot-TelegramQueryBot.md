---
id: Polkadot-TelegramQueryBot
type: project
title: Polkadot Telegram Query Bot
description: Telegram bot that queries data from Polkadot other Substrate-based chains
date: 17 Jun 2020
---
![Polkadot bot](articles/images/polkadot-bot.png "=250x250")

# Overview

The Polkadot Telegram Query Bot is a Telegram bot that queries and returns data to users from Polkadot and other Substrate-based chains. Users can interact with this by sending them command messages in private or group chats.

Built as part of the [**Build Polkadot bounty challenges**](https://github.com/Web3Foundation/build-polkadot/issues/1), sponsored by the Web3 Foundation, under the **Build Polkadot Challenge 2: User Tools** category.

# Repository

[https://github.com/ayobuenavista/polkadot-telegram-query-bot](https://github.com/ayobuenavista/polkadot-telegram-query-bot)

# Technologies Used

* [Telegraf](https://github.com/telegraf/telegraf)
* [polkadot.js](https://polkadot.js.org/api/)

# Deployed Test Version

A live version of the bot is running. Search for [@polkadot_query_bot](https://t.me/polkadot_query_bot) in Telegram.

# Launching the Bot

## Setup

To launch your own instance of the bot:

1) Clone the `polkadot-telegram-query-bot` repo.

```bash
$ git clone git@github.com:ayobuenavista/polkadot-telegram-query-bot.git
```

2) Install the required NPM packages.

```bash
$ npm install
```

3) Obtain a Telegram bot token using Telegram's [BotFather](https://t.me/botfather). You can find a detailed guide on that [here](https://core.telegram.org/bots#6-botfather).

4) Create an .env file in the root directory, containing your Telegram bot token. Note: Omit the `bot` prefix in the Telegram token.

e.g.
```bash
TELEGRAM_TOKEN=xxxxxxxxx:xxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxx
```

5) Edit the `node` URIs in `./src/config/default.json` to add in your node or node provider, or you can leave the current definitions as is. At the moment, only Polkadot and Kusama are supported.

## Running

To run in development mode (restarts at every file change)
```bash
npm run dev
```

To run in production mode
```bash
npm run start
```

You should see something like:

![Polkadot bot start](articles/images/polkadot-bot-start.png "=250x661")

# Bot Commands

Send the following commands directly to the bot or in a group where the bot is present.

Note: if no chain is passed, Polkadot queried as default.

## /balance
Returns the balance of an account
```
/balance <accountId> <optional: chain>
```

## /blockInfo
Returns the block info at the provided height
```
/blockInfo <height> <optional: chain>
```

## /chainInfo
Returns basic information of the Substrate chain
```
/chainInfo <optional: chain>
```

## /councilInfo
Returns council information
```
/councilInfo <optional: chain>
```

## /democracyInfo
Returns democracy information
```
/democracyInfo <optional: chain>
```

## /electionsInfo
Returns elections information
```
/electionsInfo <optional: chain>
```

## /intentionCount
Returns the number of validators waiting to validate
```
/intentionCount <optional: chain>
```

## /intentions
Returns a range of validators that indicate their intention to validate (e.g. range: 0-10)
```
/intentions <range> <optional: chain>
```

## /latestBlock
Returns the latest block information
```
/latestBlock <optional: chain>
```

## /proposalInfo
Returns the information of a proposal by providing the proposal hash
```
/proposalInfo <hash> <optional: chain>
```

## /proposals
Returns the list of proposals
```
/proposals <optional: chain>
```

## /runtimeConstants
Returns the runtime constant values
```
/runtimeConstants <optional: chain>
```

## /stakingInfo
Returns the staking information
```
/stakingInfo <optional: chain>
```

## /sudoKey
Returns the sudo key accountId
```
/sudoKey <optional: chain>
```

## /techComm
Returns the technical committee information
```
/techComm <optional: chain>
```

## /techCommProposalInfo
Returns the information of a technical committee proposal by providing the proposal hash
```
/techCommProposalInfo <hash> <optional: chain>
```

## /techCommProposals
Returns the list of technical committee proposals
```
/techCommProposals <optional: chain>
```

## /validatorCount
Returns the number of active validators
```
/validatorCount <optional: chain>
```

## /validators
Returns a range of active validators (e.g. range: 0-10)
```
/validators <range> <optional: chain>
```

# Examples

To get balance information of an account:
![Polkadot /balance example](articles/images/polkadot-examples-balance.png)

To get the first 5 active validators in Kusama:
![Polkadot /validators example](articles/images/polkadot-examples-validators.png)

Get the chain information in Polkadot:
![Polkadot /councilInfo example](articles/images/polkadot-examples-chaininfo.png)

Get the council information in Kusama:
![Polkadot /councilInfo example](articles/images/polkadot-examples-councilinfo.png)

# Other Notes

It was difficult to find a list of public node providers. Thankfully, [https://polkadot.js.org/apps](https://polkadot.js.org/apps) returns a list of public node endpoints in the `node selection` screen. When clicking `custom endpoint`, you can see the WebSocket URI of the currently selected endpoint.
