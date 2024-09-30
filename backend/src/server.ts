import express, { Request, Response } from 'express';
import txRoutes from './routes/TransactionRoutes.js';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the RESTful API!');
});

app.use('/api', txRoutes);

const port = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log("Server is running on port " + port.toString());
});
