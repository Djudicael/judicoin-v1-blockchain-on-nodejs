import BlockChain from "../src/models/blockchain.js";

const run = async () => {
    const bitcoin = new BlockChain();

    // const previousBlockHash = 'qfqfdtdydufgujghjg';
    // const currentBlockData = [
    //     {
    //         amount: 100,
    //         sender: 'ALEXgdgetatdgdh',
    //         recipient: 'JENNYdgvxdfnkkhjkg'
    //     },
    //     {
    //         amount: 50,
    //         sender: 'ALEXgdgetatdgdh',
    //         recipient: 'JENNYdgvxdfnkkhjkg'
    //     },
    //     {
    //         amount: 200,
    //         sender: 'ALEXgdgetatdgdh',
    //         recipient: 'JENNYdgvxdfnkkhjkg'
    //     }
    // ];
    // //46184
    // const nonce = bitcoin.proofOfWork({ previousBlockHash, currentBlockData });
    // console.log(nonce);

    //2621b5d3ec409b182f8da5e06accf8c6894de05d03650ab86af1a9fb696d97c5
    // console.log(bitcoin.hashBlock({ previousBlockHash, currentBlockData, nonce:46184 }));

    console.log(bitcoin);
}


run();