---
id: Introduction-Kyber
---
![Kyber logo](logos/kyber.png "=150x190")

Kyber is an on-chain liquidity protocol that allows anyone to conribute or access liquidity. The key mechanism it provides is the swapping of tokens, which anyone can tap into for a wide variety of inter-token use cases. For example, vendors are able to accept payments in multiple tokens on their e-commerce platforms yet receiving the payment in their token of choice. Another example are dapps, which have their own platform token, allowing users who do not hold that platform token to utilize their platform and services with other tokens. The most popular use case is using Kyber's liquidity in DeFi (decentralized financial).

![Kyber diagram](articles/images/kyber-diagram.png "=150x712")

The Kyber protocol aggregates liquidity from diverse sources into a single pool, which in turn provides one endpoint for takers to perform multiple token swaps in a blockchain transaction. The protocol can be integrated into any applications thereby enabling value exchanges to be performed seamlessly between all parties in the ecosystem.

![Kyber architecture](articles/images/kyber-architecture.png "=250x549")

As seen in the diagram above, the protocol consists of a set of core and reserve components. The core network smart contracts contain the main business logic that allows liquidity providers to connect their liquidity to the protocol and for takers to interact and access that liquidity. Kyber is fully on-chain, allowing for seamless composability with other dapps and smart contracts.

Liquidity is provided to the protocol through Reserves. A reserve is a set of smart contracts that serves liquidity by providing conversion rates and facilating trades for a given token. A reserve's design is flexible and allows liquidity providers to serve liquidity in many ways. One design allows liquidity providers to market make for a list of tokens by incorporating their own pricing strategy and submitting those rates to the contract. Another method allows the contract to act as an automated market maker (AMM) by calculating the rate of a token within the smart contract entirely on-chain, while another method allows the reserve to pull liquidity from other protocols as well, such as Uniswap and Oasis.

As a result, a diverse set of liquidity can be provided to Kyber in many ways, while accessing this liquidity can be done using Kyber as the single endpoint.
