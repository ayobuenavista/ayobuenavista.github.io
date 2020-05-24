---
id: Introduction-Ethereum
---
![Ethereum logo](logos/ethereum.png "=150x219")

Ethereum is a public blockchain that pioneered and popularized blockchain based smart contracts which can be used to build decentralized applications. ETH is the native currency, which is generated as a reward to miners for computations performed and is also the only currency accept in the payment of transaction fees in the network. The blockchain uses a virtual machine (dubbed the Ethereum Virtual Machine), which is Turing-complete, to execute smart contracts. The concept of "gas" is used as an internal transaction pricing mechanism to mitigate spam and resource hogging on the network. Gas is a unified unit of cost of computation on the blockchain.

Ethereum 2.0 is the upcoming and latest iteration of Ethereum, which will introduce sharding and Proof-of-Stake. Dapps will be able to choose which shard they want to run on. It is designed to have a main chain, called the Beacon Chain, and pegged to the Beacon Chain are several sub-chains or shards. Shards would need to go through the Beacon Chain should they want to communicate with each other, thus cross-shard communication, although possible, is not encouraged as it is slow. The minimum staking threshold for validators is 32 ETH. Validators will be assigned to shards and divided into block proposers and committees. A block proposer is a validator that has been pseudorandomly selected to build a block. Most of the time, validators are attesters that vote on beacon blocks and shard blocks. These votes are recorded in the Beacon Chain. The votes determine the head of the Beacon Chain, and the heads of shards. A committee is a group of validators which attempt to crosslink a particular shard. A crosslink is a reference in a beacon block to a shard block, and it is how the Beacon Chain follows the head of a shard chain. All shard chains are following the Beacon Chain at all times as the Beacon chain will be treated as the "single source of truth".

**Block Explorer**: [https://etherscan.io/](https://etherscan.io/)

**Addresses**: "0x" prefix concatenated with the rightmost 20 bytes of the Keccak-256 hash of the ECDSA public key. Account and contract addresses are indistinguishable and share the same format, however contract addresses are determined by the sender address and creation transaction nonce.
Example: `0x2B522cABE9950D1153c26C1b399B293CaA99FcF9`

**Block Time**: average of 15 seconds.

**Consensus**: For Ethereum 1.0, consensus is Proof-of-Work with a modified version of Nakamoto consensus via transaction-based state transitions. It uses Ethash as the hashing algorithm, which is designed to be ASIC-resistant via memory-hardness. For Ethereum 2.0, consensus is Proof-of-Stake using Casper Correct by Construction with Greediest Heaviest Observed Sub-Tree (GHOST) as the fork-choice rule protocol.

**ETH Supply**: No hard cap on the total supply.

**Smart Contracts**: Solidity, a statically-typed Javascript-like language, is the most popular high-level programming language on Ethereum that compiles code to EVM bytecode.

Example contract code:

```solidity
pragma solidity >=0.5.0 <0.7.0;

contract Coin {
    // The keyword "public" makes variables
    // accessible from other contracts
    address public minter;
    mapping (address => uint) public balances;

    // Events allow clients to react to specific
    // contract changes you declare
    event Sent (address from, address to, uint amount);

    // Constructor code is only run when the contract
    // is created
    constructor() public {
        minter = msg.sender;
    }

    // Sends an amount of newly created coins to an address
    // Can only be called by the contract creator
    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);
        require(amount < 1e60);
        balances[receiver] += amount;
    }

    // Sends an amount of existing coins
    // from any caller to an address
    function send(address receiver, uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent (msg.sender, receiver, amount);
    }
}
```
