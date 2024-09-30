import express, { Request, Response } from 'express';
import txRoutes from './routes/TransactionRoutes.js';
import {Config} from "./utils/config.js";

const app = express();

app.use(express.json());

// For quick test purposes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the RESTful API!');
});

// Actual functionality
app.use('/api', txRoutes);

app.listen(Config.port, () => {
  console.log(`Server is running on port ${Config.port.toString()}`);
});
