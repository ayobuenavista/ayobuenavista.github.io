---
id: Introduction-Cosmos
---
![Cosmos logo](logos/cosmos.png "=150x225")

Cosmos is an interoperable blockchain protocol that facilitates the transfer of data through a network of communicating blockchains. Its goal is to "create an Internet of Blockchains". It operates via a Hub-and-spoke model of which will consist of an ecosystem of blockchain Hubs, each of which will have several Zones (sidechains) pegged to it. The main chain is called the Cosmos Hub. Creating a Zone is permissionless, but creating a new Hub will most likely require majority agreement. ATOM is the native asset of Cosmos and is used for on-chain governance. Specifically, ATOMs can be staked by Zone validators to join Hubs. Cosmos Hub has a similar gas system and requires ATOM to be used for transaction fees. ATOMs are, however, intended to be highly illiqui, thus, Cosmos does not have a native medium of exchange.

The Cosmos Hub is designed to keep track of the account balances in Cosmos Zones. Zones have to be able to submit a light client proof of their state to Hubs that the Hub can understand. Thus, Zones can run any consensus protocol that allows them to generate such proofs. Furthermore, while incentive mechanisms are deployed on the Hub level, Zones are responsible for providing enough incentive mechanisms to keep an honest majority.

**Block Explorer**: [https://cosmos.bigdipper.live/](https://cosmos.bigdipper.live/)

**Addresses**: There are 3 main types of Addresses available by default in the Cosmos SDK: 1) accounts, which identify users and are derived using the secp256k1 curve; 2) validator operators, which identify the operators of validators and are derived using the secp256k1 curve; and 3) consensus nodes, which identify the validator nodes participating in consensus and are derived using the ed25519 curve. All addresses are of 20 byte length prepended with a Bech32 prefix.<br />
Example: `cosmos1hk4ze3hqwg62w89gmee3hj72u7wrap0a2ts87u`

**Block Time**: Average of 6-7 seconds.

**Consensus**: Delegated Proof-of-Stake powered by Tendermint Core, a Byzantine Fault Tolerance consensus mechanism.

**ATOM Supply**: Total supply capped at 237,928,231 ATOM.

**Smart Contracts**: Like Polkadot, the Cosmos Hub does not implement smart contracts natively. Application-specific blockchains or Zones can implement smart contract functionality. One example is Strong Force, a C# smart contracts framework over Tendermint consensus.

Example contract code in Strong Force:

```csharp
public abstract class Contract
{
    protected Contract(Address address)
    {
         this.Address = address;
    }
    public Address Address { get; }
    internal event EventHandler<ActionEventArgs> Send;
    internal event EventHandler<ActionEventArgs> Forward;
    protected internal abstract object GetState();
    protected internal virtual bool Receive(Action action)
    {
       return this.HandleReceivedAction(action);
    }
    protected abstract bool HandleReceivedAction(Action action);
    protected virtual void Redirect(Action action) { }
}
```