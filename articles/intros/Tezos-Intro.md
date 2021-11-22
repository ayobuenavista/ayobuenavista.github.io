---
id: Introduction-Tezos
---
![Tezos logo](logos/tezos.png "=150x187")

Tezosis a multi-purpose public blockchain that markets itself as a self-amending protocol based on the idea of a digital commonwealth, in which governance is democratized in an efficient and sustainable manner to avoid costly hard-fork scenarios. It supports the creation of new tokens, smart contracts, and dapps. At its core, Tezos is a system designed to formalize proposing, voting for, and implementing changes to the functionality of the network. XTZ is the token used for all operations. Holders of XTZ can vote with a weighting of one vote per token once a proposal is submitted to the protocol.

With the incorporation of features such as Liquid Proof-of-Stake and on-chain governance, throughput is traded for a higher level of decentralization. Protocol amendments are adopted over election cycles which are 131,072 blocks long, or roughly three months. Amendments are only voted on by the community, and not by the Tezos Foundation. All stakeholders can participate in protocol governance either directly or indirectly, through delegation. An election cycle provides a procedure for stakeholders to propose amendments and reach an agreement.

Block generation is referred to as baking while validators are known as bakers. Bakers contribute their computing power to the network to validate transactions. To participate, bakers must own at least 8,000 XTZ (or 1 roll). The more rolls held by a baker, the higher the chance they will bake the next block.

The self-amendment process is split into four periods: the Proposal Period, Exploration Vote Period, Testing Period and Promotion Vote Period. Each of these four periods lasts eight baking cycles (32,768 blocks), which is approximately three months from proposal to activation.

**Block Explorer**: [https://tezblock.io/](https://tezblock.io/)

**Addresses**: 32-byte Ed25519 (tz1), Secp256k1 (tz2), or P256 (tz3) key encoded to Base58. There are two types of addresses: implicit and smart contracts. Implicit addresses have tz1, tz2, tz3 prefixes. Smart contracts use kT1 prefix and are created with an origination operation.<br />
Example: `tz1RjtZUVeLhADFHDL8UwDZA6vjWWhojpu5w`

**Block Time**: Targetting 1 minute.

**Consensus**: Emmy+, a Liquid Proof-of-Stake consensus algorithm.

**XTZ Supply**: No hard cap on the total supply.

**Smart Contracts**: Liquidity, a high level typed language that that strictly complies with Michelson security restrictions. Michelson is a stack-based language with high level data types and primitives.

Example contract code:

```ocaml
[%%version 0.4]
  
(* Smart contract for voting. Winners of vote split the contract
   balance at the end of the voting period. *)

(** Type of storage for this contract *)
type storage = {
  voters : (address, unit) big_map; (** Used to register voters *)
  votes : (string, nat) map; (** Keep track of vote counts *)
  addresses : (string, key_hash) map; (** Addresses for payout *)
  deadline : timestamp; (** Deadline after which vote closes *)
}

(** Initial storage *)
let%init storage addresses = {
  (* Initialize vote counts to zero *)
  votes = Map.fold (fun ((name, _kh), votes) ->
      Map.add name 0p votes
    ) addresses Map;
  addresses;
  voters = BigMap ; (* No voters *)
  deadline = Current.time () + 3600 * 24 (* 1 day from now *)
}

(** Entry point for voting.
    @param choice A string corresponding to the candidate *)
let%entry vote choice storage =
  (* Only allowed while voting period is ongoing *)
  if Current.time () > storage.deadline then failwith "Voting closed";
  (* Voter must send at least 5tz to vote *)
  if Current.amount () < 5.00tz then
    failwith "Not enough money, at least 5tz to vote";
  (* Voter cannot vote twice *)
  if Map.mem (Current.sender ()) storage.voters then
    failwith ("Has already voted", Current.sender ());
  let votes = storage.votes in
  match Map.find choice votes with
  | None ->
    (* Vote must be for an existing candidate *)
    failwith ("Bad vote", choice)
  | Some x ->
    (* Increase vote count for candidate *)
    let storage = storage.votes <- Map.add choice (x + 1p) votes in
    (* Register voter *)
    let storage =
      storage.voters <- Map.add (Current.sender ()) () storage.voters in
    (* Return updated storage *)
    ([], storage)

(* Auxiliary function : returns the list of candidates with the
   maximum number of votes (there can be more than one in case of
   draw). *)
let find_winners votes =
  let winners, _max =
    Map.fold (fun ((name, nb), (winners, max)) ->
        if nb = max then
          name :: winners, max
        else if nb > max then
          [name], nb
        else winners, max
      ) votes ([], 0p) in
  winners

(** Entry point for paying winning candidates. *)
let%entry payout () storage =
  (* Only allowed once voting period is over *)
  if Current.time () <= storage.deadline then failwith "Voting ongoing";
  (* Indentify winners of vote *)
  let winners = find_winners storage.votes in
  (* Balance of contract is split equally between winners *)
  let amount = match Current.balance () / List.length winners with
    | None -> failwith "No winners"
    | Some (v, _rem) -> v in
  (* Generate transfer operations *)
  let operations = List.map (fun name ->
      let dest = match Map.find name storage.addresses with
        | None -> failwith () (* This cannot happen *)
        | Some d -> d in
      Account.transfer ~amount ~dest
    ) winners in
  (* Return list of operations. Storage is unchanged *)
  operations, storage
  ```