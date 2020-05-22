---
id: Introduction-Ethereum
---
![Ethereum logo](logos/ethereum.png "=150x219")

Ethereum is a public blockchain that pioneered and popularized blockchain based smart contracts which can be used to build decentralized applications. ETH is the native currency which is generated as a reward to miners for computations performed and is also the only currency accept in the payment of transaction fees in the network. The blockchain uses a virtual machine (dubbed the Ethereum Virtual Machine), which is Turing-complete, to execute smart contracts.

The concept of "gas" is used as an internal transaction pricing mechanism to mitigate spam and resource hogging on the network. Gas is a unified unit of cost of computation on the blockchain.

**Addresses**: "0x" prefix concatenated with the rightmost 20 bytes of the Keccak-256 hash of the ECDSA public key. Account and contract addresses are indistinguishable and share the same format, however contract addresses are determined by the sender address and creation transaction nonce.
Example: `0x2B522cABE9950D1153c26C1b399B293CaA99FcF9`

**Block Time**: average of 15 seconds.

**Consensus**: Proof-of-Work with a modified version of Nakamoto consensus via transaction-based state transitions. Ethereum uses Ethash as the hashing algorithm, which is designed to be ASIC-resistant via memory-hardness.

**ETH Supply**: No hard cap on the total supply


