---
id: Introduction-Algorand
---
![Algorand logo](logos/algorand.png "=150x220")

Algorand is a scalable a smart contract platform that uses a variation of Proof-of-Stake (PoS) called Pure PoS (PPoS) to secure the network and reach consensus on block production. Its technology finalizes blocks in seconds and aims to provide immediate transaction finality while preventing forks. Unlike other PoS models, PPoS does not reward validators with newly minted tokens, nor does it put validator or user funds at risk of being slashed. ALGO is the native asset of the Algorand Protocol, serves as the medium of exchange and store of value, and is used for staking by network validators.

In Algorand, the blockchain does not fork as only one block can have the required threshold of signatures in order to be certified in a given round. All users are randomly, secretly, and continuously selected to participate in the Algorand consensus protocol. Neither a few delegated users nor a fixed committee is responsible for proposing blocks in Algorand. Participants change every round of block selection in order to protect the network against attackers. For each round, every set of participants is random and independent of earlier participants. When a new block gets committed to the blockchain, everyone becomes aware of this seed (and everyone sees the same seed). A user secretly checks whether they were selected to participate by evaluating a Verifiable Random Function (VRF) with their secret participation key and the selection seed. By sending this proof, a user can prove to anyone that they were indeed selected to participate.

Algorand offers highly-customizable smart contracts (ASCs), Asset Tokenization (Algorand Standard Assets), and Atomic Transfers built directly in Layer-1. ASC1s are Layer-1 smart contracts that automatically enforce custom rules and logic, typically around how assets can be transferred. They are complex economic relationships made up of basic transaction primitives written in a new language called Transaction Execution Approval Language (TEAL), an assembly-like stack machine language. TEAL was designed to be significantly limited in relation to what most the world thinks of when the term "smart contract" is used. The language is a non "turing-complete" language, that does not support looping but does support forward branches, it consists of 30 basic instructions, it executes as a straight-line program solely using TEAL operations and every ASC is at most 1KB-long.

**Block Explorer**: [https://algoexplorer.io/](https://algoexplorer.io/)

**Addresses**: Base32 encoding of a 32-byte Ed25519 public key and a 4-byte checksum, which is the last 4 bytes of the SHA-512/256 hash of the public key. <br />
Example: `6JF7P3NV4SO52ZWQJH6O7OWFV5AP6ES4LS6ORKUN7WIPRFLWTZIRJOW2LU`

**Block Time**: Every 5 seconds.

**Consensus**: Algorand uses a Pure Proof-of-Stake (PPoS) consensus protocol built on Byzantine agreement whereby the users' influence on the choice of a new block is proportional to their stake in the system (number of Algos).

**ALGO Supply**: 10 billion ALGOs.

**Smart Contracts**: The language of Algorand Smart Contracts is named Transaction Execution Approval Language or TEAL. Since TEAL is a low level language, high level languages such as Python, Javascript, Java, and Go can be used in tandem with the Algorand SDK to write contracts that compile to TEAL. One example is using PyTeal, a Python language binding created as a community project used to express smart contract logic in Python. PyTeal then compiles the smart contract logic to TEAL source code. In a nutshell, PyTeal abstracts away a lot of heavy lifting that is required when writing TEAL.

Example contract code in PyTeal:

```python
#!/usr/bin/env python3

from pyteal import *
import uuid, base64
from algosdk import algod, transaction, account, mnemonic
from periodic_payment import periodic_payment, tmpl_amt

#--------- compile & send transaction using Goal and Python SDK ----------

teal_source = periodic_payment().teal() 

# compile teal
teal_file = str(uuid.uuid4()) + ".teal"
with open(teal_file, "w+") as f:
    f.write(teal_source)
lsig_fname = str(uuid.uuid4()) + ".tealc"

stdout, stderr = execute(["goal", "clerk", "compile", "-o", lsig_fname,
                          teal_file])

if stderr != "":
    print(stderr)
    raise
elif len(stdout) < 59:
    print("error in compile teal")
    raise

with open(lsig_fname, "rb") as f:
    teal_bytes = f.read()
lsig = transaction.LogicSig(teal_bytes)

# create algod clients
algod_address = "http://<your-algod-node>:<your-algod-port>"
algod_token = "<your-api-token>"
acl = algod.AlgodClient(algod_token, algod_address)

#Recover the account that is wanting to delegate signature
passphrase = "patrol crawl rule faculty enemy sick reveal embody trumpet win shy zero ill draw swim excuse tongue under exact baby moral kite spring absent double"
sk = mnemonic.to_private_key(passphrase)
addr = account.address_from_private_key(sk)
print("Dispense at least 201000 microAlgo to {}".format(addr))
input("Make sure you did that. Press Enter to continue...")

# sign the logic signature with an account sk
lsig.sign(sk)

# get suggested parameters
params = acl.suggested_params()
gen = params["genesisID"]
gh = params["genesishashb64"]
startRound = params["lastRound"] - (params["lastRound"] % 1000)
endRound = startRound + 1000
fee = 1000
amount = 200000
receiver = "ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM"
lease = base64.b64decode("y9OJ5MRLCHQj8GqbikAUKMBI7hom+SOj8dlopNdNHXI=")

# create a transaction
txn = transaction.PaymentTxn(addr, fee, startRound, endRound, gh, receiver, amount, flat_fee=True, lease=lease)

# Create the LogicSigTransaction with contract account LogicSig
lstx = transaction.LogicSigTransaction(txn, lsig)

# send raw LogicSigTransaction to network
txid = acl.send_transaction(lstx)
print("Transaction ID: " + txid )
```
