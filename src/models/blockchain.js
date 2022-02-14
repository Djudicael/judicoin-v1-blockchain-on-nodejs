import crypto from 'crypto';
import Block from "./block.js";
import Transaction from "./transaction.js";
export default class BlockChain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
        // this.pendingTransactions = [];
        // this.currentNodeUrl = currentNodeUrl;
        this.networkNodes = [];
        // To create the genesis block
        this.createNewBlock({
            nonce: 100,
            previousBlockHash: '0',
            hash: '0'
        });
    }

    /**
     * nonce is a proof of work ( its any number)
     * hash will be the data of the transaction
     * @param {*} param0 
     */
    createNewBlock({ nonce, previousBlockHash, hash }) {
        const newBlock = new Block({
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce,
            hash, // this is the hash of the current block
            previousBlockHash // this is the hash of the previous block
        });

        this.pendingTransactions = [];
        this.chain.push(newBlock);
        return newBlock;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    createNewTransaction({ amount, sender, recipient }) {
        const newTransaction = new Transaction({ amount, sender, recipient });

        this.pendingTransactions.push(newTransaction);

        return this.getLastBlock()['index'] + 1;
    }

    hashBlock({ previousBlockHash, currentBlockData, nonce }) {
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = crypto.createHash('sha256').update(dataAsString).digest('hex');
        return hash;
    }

    /**
     * 
     */
    proofOfWork({ previousBlockHash, currentBlockData }) {
        let nonce = 0;
        let hash = this.hashBlock({ previousBlockHash, currentBlockData, nonce });
        while (hash.substring(0, 4) !== '0000') {
            nonce++;
            hash = this.hashBlock({ previousBlockHash, currentBlockData, nonce });
        }
        return nonce;
    }
}