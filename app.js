import express from 'express';
import { api } from './config/Config.js';
import user from './router/user.js';
import cors from 'cors';

const app = express();

app.use('/api_v1/user', user);

app.use(cors({origin: true, credentials: true}));

app.listen(api.port, () => {
    console.log('server running on port =>', api.port);
});