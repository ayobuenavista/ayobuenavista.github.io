---
id: Katalyst-WhatsNew
type: guide
title: What's New in Katalyst
description: A brief guide to the new features included in Kyber's Katalyst upgrade
date: 7 July 2020
---
![Katalyst banner](articles/images/kyber-katalyst.png "=250x512")

# What is Katalyst

Katalyst is the next major protocol upgrade for Kyber Network. The upgrade enhances the economic use of KNC in the network, introduces a governance mechanism via a DAO, and provides more functionality to better server liquidity to the ecosystem. The changes introduced enhances some key features of how the Kyber protocol works, such as how trades can now be routed to specific reserves instead of it being decided by the protocol, as well as how fees are now taken and handled.

This article further introduces the technical changes made in Katalyst.

# What's New

Here are the major changes introduced:

## Updated Fee Model

Previously, reserves would need to pay the network 0.25% of the trades they facilitate as payment for their participation in the network. The new changes are outlined below.

Two new fee types are introduced:

1) **Network Fee**, which is split into 3 parts summing to 100%, and where the weight of each part is decided by the KyberDAO:
* *Burn* — a percentage of the fees collected is used to buy KNC to be burnt and taken out of the total supply.
* *Rewards* — a percentage of the fees is distributed as rewards to stakers who stake in the KyberDAO.
* *Rebates* — a percentage of the fees is given as incentives to FPRs for their market making services, to quote for tighter spreads, provide substantial liquidity, drive more volume, etc.

The fees are collected in the KyberFeeHandler contract, which is also where the rewards and rebates will be claimed.

1) **Platform Fee** — one of the new trade parameters and is deducted from the trade value in ETH. Pre-Katalyst, integrations can enroll to the Fee Sharing Program, where fee sharing partners are entitled to take a portion of the network fees collected, or specifically, 30% of the 0.25% fee taken per trade should they forward a trade from their platform to Kyber. The downside of this was that the commission is bounded by the network fee and may not generate enough revenue for fee sharing partners.

In Katalyst, contract functions for fetching rates and executing trades now provide a `platformFeeBps` parameter that allows affiliates to pass in their desired fee in BPS on top of the basic rate. The fee amount is calculated as `platformFeeBps * srcQty`. If the source asset is an ERC20 token, the fee will be converted to ETH using the settlement rate.

Both the Network and Platform fees are now charged from the takers as part of the trade, and the fees are taken in ETH. Reserves no longer have to pay fees, and as such, reserves no longer have to maintain and top-up a KNC wallet for the purpose of paying network fees. Fees are kept in the new FeeHandler smart contract, where stakeholders can then claim their respective fees according to the percentages set for Burning, Rewards, and Rebates.

## Reserve IDs

Instead of Ethereum addresses, reserves are now identified using reserve IDs. The motivation behind this is that reserve addresses can change in the event of reserve upgrades or reserve migrations. As an example, if a Fed Price Reserve does an upgrade, the address of the reserve changes. Reserve IDs provide a constant identity of a reserve in the event of upgrades or migrations. Reserve IDs also play an important role in the new Reserve Routing feature, which will be described further below.

Each reserve ID is 32 bytes long.
Example: `0xaa4b4e4320415052000000000000000000000000000000000000000000000000`

## Reserve Routing

Pre-Katalyst, when Kyber handles a trade, it searches through all relevant reserves supporting the token in the trade for the best rate offered for the full amount of the trade. In Katalyst, routing a trade to specific reserves is now possible. Routing is done through the use of `hints`, a byte array parameter using [Solidity's ABI specification](https://solidity.readthedocs.io/en/latest/abi-spec.html) to encode/decode hints. Hints has been introduced since the previous Kyber smart contracts versions but has been only used to filter out permissionless reserves. Its functionality is further expanded for reserve routing in Katalyst.

There are a total of 4 optional routing rules:
* *Best-of-all* — the default routing rule when no hint is provided, and is the classic reserve matching algorithm used by Kyber since the start.
* *Mask-In* — routing rule which specifies a list of reserves and performs a best-of-all routing on them.
* *Mask-Out* — routing rule which specifies a list of reserves to be ignored and performs a best-of-all routing on the remaining reserves (reverse of Mask-In).
* *Split* — routing rule where you can specify a list of reserves and their respective percentages of the total trade that will route to them. e.g. a Split KNC to ETH trade can be done by routing 50% of the trade to the Kyber FPR and 50% to a KNC APR. 

For token to token trades, you can specify a routing rule for each half. For example, for the token to ETH portion, you can specify a Mask-In routing rule, and for the ETH to token portion, you can specify a Split routing rule.

## KyberDAO and Staking

One of the most important additions to Katalyst is the introduction of governance through the KyberDAO and staking. The KyberDAO acts as a conduit for a set of on-chain and off-chain governance processes to align incentives and streamline collaboration between the different stakeholders in the Kyber ecosystem. With the KyberDAO, KNC token holders will play a critical role in determining key protocol parameters by staking their tokens to vote on important proposals. In return, they receive rewards in ETH from part of the network fees collected through trading activities on Kyber Network.

The KyberDAO is meant for 3 main groups of Kyber stakeholders:
* Reserve Managers, who provide liquidity to Kyber
* Takers, who uses Kyber's liquidity
* KNC holders

![Katalyst governance](articles/images/kyber-governance.png "=175x512")

Staking in Kyber is unlike staking in Proof-of-Stake systems. Staking is done entirely on smart contracts, and its main purpose is to provide voting rights for those that have "skin in the game". Therefore, staking does not add to the security to the network, running a validator is not needed, and there are no bonding periods or slashing. However, regular participation is needed in order to be entitled for rewards.

### Campaigns

KyberDAO participants vote on proposals, called `Campaigns`. A campaign lasts for an `Epoch`, which uses block timestamps and the duration is defined as 2 weeks. For example, voters can potentially decide on what technical upgrades are prioritized and where marketing resources are allocated to. However per epoch, a recurring campaign is always submitted, where voters will need to decide on the next epoch's Burn, Rewards, and Rebates (BRR) ratio. Thus, there is always some voting activity done per epoch since stakers will need to actively participate in order to earn staking rewards.

Only the DAO operator (which is the Kyber) is allowed to creating campaigns.

### Pool Operators

Pool Operators is another new role in the KyberDAO ecosystem that ensures a wide range of voting interests will be represented. KNC holder can stake their tokens, but need to actively participate to reap the rewards. Should they be unable to regularly, they can `delegate` their voting power to a representative or a Pool Operator, which votes on and collects rewards on their behalf. Pool Operators can then distribute the rewards to their respective pool members, or ask their pool members to claim from them.

Delegating is a simple smart contract function call on the KyberDAO contract.

### Rewards

Stakers can directly claim their rewards from the KyberFeeHandler contract. As discussed earlier, the network collects a 0.2% network fee per trade, and is allocated to the different Burn, Rewards, Rebates pools as voted by the DAO. Depending on the network volume and the rewards percentage, the total rewards stakers can claim may differ per epoch.

# Final Thoughts

After many of months of research and development, Katalyst went live on 07-07-2020, ushering in a new era for Kyber Network. Kyber further cements itself as an important primitive in the DeFi space.
