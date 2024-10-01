import express from 'express';
import {
executePayment, createWallet,
} from '../controllers/TransactionController.js';
import { checkApiKey } from "../utils/auth.js";

const router = express.Router();

/* 

Samples

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
*/

router.post('/payments', executePayment);
router.post('/wallets', checkApiKey, createWallet);

export default router;