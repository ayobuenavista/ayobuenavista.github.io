---
id: Introduction-Solana
---
![Solana logo](logos/solana.png "=150x127")

Solana is a permissionless blockchain that features support for smart contracts and decentralized applications It intends to feature automatically ordered transactions, sub-second settlement times, low transaction costs, and support for all LLVM compatible smart contract languages.

The protocol’s architecture combines Proof-of-History (PoH) and a customized Avalanche communication design to scale transaction throughput and time to finality (i.e., settlement time). At a high level, PoH enables network nodes to trust the submission time and order of transactions without needing to correspond with other nodes, and Avalanche is a method of organizing data flow through a network of validators. This transaction communication system works independently of Solana’s Proof-of-Stake (PoS) consensus mechanism but is designed to help consensus participants (validators) process the ledger more efficiently.

The Solana network also supports a native token, called sols (SOL). Sol tokens are used to pay Solana node-clusters as a fee for processing and validating on-chain programs or transactions. Fractional sols are called lamports in honor of Turing Award winner Leslie Lamport. A lamport is equal to approximately 0.0000000000582 sol.
