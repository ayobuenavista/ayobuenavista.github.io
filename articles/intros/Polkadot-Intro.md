---
id: Introduction-Polkadot
---
![Polkadot logo](logos/polkadot.png "=150x221")

Polkadot is a heterogeneous multi-chain blockchain designed to offer interoperability and scalability. Its base protocol leverages Parity Technologies’ Substrate framework, allowing Polkadot-based chains and applications to communicate, transact, and transfer data without relying on intermediary products or services. Polkadot does not provide application functionality but instead aims to serve as a relay-chain, hosting dynamic data structures called parallelized chains, or parachains, that provide Polkadot’s consensus, finality and voting logic.

The blockchain consists of a Relay chain and a network of Parachains. Parachains are pegged to the Relay chain and are responsible for sending the hash of every block to the Relay chain. Imagine this similar to a screenshot of the current state of the Parachain. Receiving state updates from the Parachains allows the Relay chain to foster value transfer between Parachains. Note that messages can be broadcasted instantly between Prachains and do not require finality.

Polkadot’s finality mechanism is called GRANDPA, which utilizes Proof-of-Stake. GRANDPA reaches agreements on chains. It is not responsible for validating transactions on a per-block basis. To reach consensus on individual blocks, Polkadot implements a consensus mechanism, called BABE. BABE is responsible for assigning validator slots to nodes with the highest stake. This combination allows 1) probabilistic finality by BABE due to its chain selection rule, where after a certain time the block will be finalized with a probability close to one and 2) provable and deterministic finality by GRANDPA, where finalized blocks stay final forever.

To enhance interoperability between blockchains, Polkadot utilizes bridges that link the Relay chain to the external blockchain. Since Ethereum cannot become a Relay chain on the Polkadot network, it is planned to connect both chains via a bridge.

Polkadot uses erasure coding to reconstruct information on individual Parachains. This is necessary to prove to other Parachains that information on a particular Parachain is available. The information of a block are held between various validators. If a block is unavailable, it can be reconstructed by a subsection of the original. Ethereum and NEAR Protocol utilize a similar concept.

**Block Explorer**: [https://polkascan.io/](https://polkascan.io/)

**Addresses**: Substrate-based chains uses SS58 format. SS58 is a modification of Base58-check from Bitcoin with some minor modifications. Notably, the format contains an address type prefix which identifies an address as belonging to a specific network. For example, Polkadot addresses always start with the number 1. Kusama addresses always start with a capital letter like C, D, F, G, H, J, etc. Generic Substrate addresses start with 5.<br />
Example: `1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fg`

**Block Time**: The Relay Chain will target to produce a block every 6 seconds.

**Consensus**: Nominated Proof-of-Stake with GRANDPA as the finality gadget and BABE as the block production mechanism.

**DOT Supply**: No hard cap on the total supply.

**Smart Contracts**: The Polkadot Relay Chain does not implement smart contracts natively due to partly the design philosophy of Polkadot that dictates that the Relay Chain should be the minimal logic required to accomplish its job. However, Polkadot will be a platform for other chains that do implement smart contracts, such as Ink, Moonbeam, and Edgeware.

Example contract code in Ink:

```rust
// declare modules
use parity::<module>
...
//wrap entire contract inside the contract! macro
contract! {
   // contract variables as a struct
   struct NFToken {
      owner: storage::Value<AccountId>,
      ...
   }
   // compulsory deploy method that is run upon the initial contract instantiation
   impl Deploy for NFToken {
      fn deploy(&mut self, init_value: u64){}
   }
   // define events
   event EventMint { owner: AccountId, value: u64 } 
   ...
   // public contract methods in an impl{} block
   impl NFToken {
      pub(external) fn total_minted(&self) -> u64 {}
      ...
   }
   // private contract methods in a separate impl{} block
   imp NFToken {
      fn is_token_owner(
         &self, 
         of: &AccountId, 
         token_id: u64) -> bool {}
       ...
   }
}
// test functions
mod tests {
   fn it_works() {}
   ...
}
```