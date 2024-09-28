import express from 'express';
import {
executePayment,
} from '../controllers/TransactionController';

const router = express.Router();

/* 

Samples

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
*/

router.put('/tx/:id', executePayment);

export default router;