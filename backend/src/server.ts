import express, { Request, Response } from 'express';
import txRoutes from './routes/TransactionRoutes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the RESTful API!');
});

app.use('/api', txRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
