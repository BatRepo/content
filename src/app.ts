import express from 'express'
import { router } from './routes'
import 'dotenv/config';
import Cors from './useCases/middleware/Cors';
import bodyParser from 'body-parser';
import connectDB from './providers/mongoBD/connection';

const app = express();
app.use(Cors);

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
app.use(router);

export { app };


