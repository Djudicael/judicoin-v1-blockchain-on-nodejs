export default class Block {
    constructor({
        index,
        timestamp = Date.now(),
        transactions,
        nonce,
        hash, // this is the hash of the current block
        previousBlockHash // this is the hash of the previous block
    }) {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.nonce = nonce;
        this.hash = hash;
        this.previousBlockHash = previousBlockHash;
    }
}