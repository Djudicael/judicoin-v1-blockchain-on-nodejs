import express from 'express'
import morgan from 'morgan'
import createError from 'http-errors';

import BlockchainRoute from './routes/blockchain.route.js';


const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));


app.use('/', BlockchainRoute);
app.use(async (req, res, next) => {
    // const error = new Error("Not found");
    // error.status = 404;
    // next(error);
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});

export default app;