import express from 'express';

const router = express.Router();
import { getBlockchain, transaction, mine, registerAndBroadcast, registerNode, registerNodesBulk } from '../controller/blockchain.controller.js';

// fetch entire blockchain
router.get('/blockchain', getBlockchain);

// create a new transaction
router.post('/transaction', transaction);

//mine anew block
router.get('/mine', mine);
// register a node and broadcast that node to the network
router.post('/register-and-broadcast-node', registerAndBroadcast);

//register a node with a network
router.post('/register-node', registerNode);

//register multiple nodes at once
router.post('/register-nodes-bulk', registerNodesBulk);

export default router;