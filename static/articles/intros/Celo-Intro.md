---
id: Introduction-Celo
---
![Celo logo](logos/celo.png "=150x221")

Celo is a mobile-first, Proof-of-Stake (PoS) blockchain based on Ethereum that makes financial tools accessible to anyone with a mobile phone. It is designed to support stablecoins and tokenized assets with an algorithmic reserve-backed stability mechanism. The network supports the development of smart contracts and decentralized applications. Its first application, Celo Wallet, intends to be a social-payments system centered around mobile phones. Most of Celo's Proof-of-Stake mechanism is implemented as smart contracts, and as such can be changed through Celo's on-chain governance process.

The protocol initially creates two tokens: a reserve token, Celo Gold, with a fixed supply that is divided between the protocol's asset reserve and a diversified basket of other digital assets (e.g., Bitcoin and Ether), and elastic fiat-pegged coins (e.g., Celo Dollar or Celo Euro), a means-of-payment asset that adjusts its supply according to use to maintain a fiat peg. Celo Gold (cGLD) is Celo’s native token, and it enables users to participate in network consensus (via its Proof-of-Stake system) and in on-chain governance decisions, which represent upgrades to the Celo protocol or modifications to the reserve target asset allocation. 

cGLD is used for gas and payment for network transaction fees. The Celo protocol establishes a gas price minimum that applies to all transactions or contract executions. The market for discovering this gas price follows the logic presented in EIP-1559, an Ethereum improvement proposal designed to enhance the gas fee market. Part of this gas fee, known as the base, will go to Celo's on-chain Community Fund, which helps provide funding for the general upkeep of the Celo platform.

Celo's blockchain reference implementation is based on go-ethereum, the Go implementation of the Ethereum protocol. While recognizing that Ethereum is an independent project with its own trajectory, Celo hopes to contribute changes where it makes sense to do so.

**Block Explorer**: [https://explorer.celo.org/](https://explorer.celo.org/)

**Addresses**: Similar to Ethereum, "0x" prefix concatenated with the rightmost 20 bytes of the Keccak-256 hash of the ECDSA public key<br />
Example: `6JF7P3NV4SO52ZWQJH6O7OWFV5AP6ES4LS6ORKUN7WIPRFLWTZIRJOW2LU`

**Block Time**: Average of 5 seconds.

**Consensus**: Vartiant of Proof-of-Stake based on an implementation called Istanbul, or IBFT.

**CGLD Supply**: 1 billion CGLDs.

**Smart Contracts**: Similar to Ethereum, smart contracts in Celo is based on Solidity, a statically-typed Javascript-like language that compiles code to EVM bytecode.

Example contract:

```solidity
pragma solidity >=0.5.0 <0.7.0;

contract HelloWorld {
  string name = 'Celo';

  function getName() public view returns (string memory) {
    return name;
  }

  function setName(string calldata newName) external {
    name = newName;
  }
}
```