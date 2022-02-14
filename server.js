
import app from './src/networkNode.js';
import http from 'http';

import { PORT } from './src/config/config.js';

const port = PORT || 3001;
// const port = process.argv[2];


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});