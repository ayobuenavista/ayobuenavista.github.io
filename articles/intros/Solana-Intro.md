---
id: Introduction-Solana
---
![Solana logo](logos/solana.png "=150x127")

Solana is a permissionless blockchain that supports the creation of smart contracts and hosting of decentralized applications It intends to feature automatically ordered transactions, sub-second settlement times, low transaction costs, and support for all LLVM compatible smart contract languages.

Core to Solana's scaling solution is a decentralized clock titled Proof-of-History (PoH), built to solve the problem of time in distributed networks in where there is not a single, trusted, source of time. By using Verifiable Delay Functions, PoH allows each node to locally generate timestamps with SHA256 computations. This eliminates the need for the broadcasts of timestamps accross the network, improving overall network efficiency. olana requires all validators to constantly solve SHA256-based Verifiable Delay Functions (VDF). 

Solana's blockchain is built using 8 major innovations: 1) Proof-of-History, as described above; 2) Tower Byzantine Fault Tolerance, a PoH-optimized version of PBFT leveraging PoH as a clock before consensus to reduce communication overhead and latency; 3) Turbine, a block propagation protocol that solves the block propagation time as the number of nodes in the network increases; 4) Gulf Stream, a Mempool-less transaction forwarding protocol that determines upcoming network leaders according to their stakes for each block production process; 5) Sealevel, a parallel smart contracts run-time designed to scale horizontally across GPUs and SSDs; 6) Pipeline, transaction processing unit for validation that ensures that all parts of the hardware are efficiently at work all the time; 7) Cloudbreak, horizontally-scaled accounts database designed to optimize for concurrent reads and writes spread across a RAID 0 configuration of SSDs; and 8) Archivers, distributed ledger storage that is offloaded from validators to a network of nodes.

SOL is the native asset of the Solana blockchain. SOL tokens are used to pay Solana node-clusters as a fee for processing and validating on-chain programs or transactions. SOL is used for staking, transaction fees to pay for simple transactions and smart-contract executions, and soon will be used in governance voting in the future. Fractional SOLs are called lamports in honor of Turing Award winner Leslie Lamport.

**Block Explorer**: [https://explorer.solana.com/](https://explorer.solana.com/)

**Addresses**: Base58 encoding of a 32-byte Ed25519 public key.<br />
Example: `GKvqsuNcnwWqPzzuhLmGi4rzzh55FhJtGizkhHaEJqiV`

**Block Time**: Every 400 milliseconds.

**Consensus**: A variant of Delegated Proof-of-Stake called Tower BFT, a Proof-of-History version of PBFT.

**SOL Supply**: 488,630,608.32170373 SOLs.

**Smart Contracts**: May be written in any programming language that can target the Berkley Packet Filter (BPF) safe execution environment. The Solana SDK offers the best support for C/C++ and Rust programs, which are compiled to BPF using the LLVM compiler infrastructure.

Example contract code in C:

```c
#include <solana_sdk.h>

extern uint64_t entrypoint(const uint8_t *input) {
  SolAccountInfo ka[1];
  SolParameters params = (SolParameters) { .ka = ka };

  sol_log("Hello World");

  if (!sol_deserialize(input, &params, SOL_ARRAY_SIZE(ka))) {
    return ERROR_INVALID_ARGUMENT;
  }
  sol_log_params(&params);
  return SUCCESS;
}
```
