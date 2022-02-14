import createError from 'http-errors'
import * as service from '../service/blockchain.service.js';
import Blockchain from '../models/blockchain.js';
import Transaction from '../models/transaction.js';
import crypto from 'crypto';
import { NODE } from '../config/config.js';
const nodeAddress = crypto.randomUUID();
const judicoin = new Blockchain();

import { register } from '../repository/network.repository.js';


export const getBlockchain = async (req, res, next) => {
    res.send(judicoin);
};

export const transaction = async (req, res, next) => {
    const transaction = new Transaction({ ...req.body });
    const blockIndex = judicoin.createNewTransaction(transaction);
    res.send({ note: `Transaction will be added in block ${blockIndex}` });
};


export const mine = async (req, res, next) => {
    const lastBlock = judicoin.getLastBlock();
    const previousBlockHash = lastBlock.hash;
    const currentBlockData = {
        transactions: judicoin.pendingTransactions,
        index: lastBlock.index + 1
    };
    const nonce = judicoin.proofOfWork({ previousBlockHash, currentBlockData });
    const blockHash = judicoin.hashBlock({ previousBlockHash, currentBlockData, nonce });

    judicoin.createNewTransaction({ amount: 12.5, sender: "00", recipient: nodeAddress })
    const newBlock = judicoin.createNewBlock({ nonce, previousBlockHash, hash: blockHash });
    res.send({
        note: " new block mined successfully",
        block: newBlock
    });
};

export const registerAndBroadcast = async (req, res, next) => {
    const newNodeUrl = req.body.newNodeUrl;
    if (judicoin.networkNodes.indexOf(newNodeUrl) == -1) {
        judicoin.networkNodes.push(newNodeUrl);
    }

    for (const networkNode of judicoin.networkNodes) {
        // register-node
        const data = await register({ url: networkNode, newNodeUrl })
    }
}

export const registerNode = async (req, res, next) => {
    const newNodeUrl = req.body.newNodeUrl;
}

export const registerNodesBulk = async (req, res, next) => {
    const newNodeUrl = req.body.newNodeUrl;
}

