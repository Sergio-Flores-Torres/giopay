import { Request, Response } from 'express';
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';
import {Config} from "../utils/config.js";

// Creates a wallet to own the ATA for the user tokens.
export const createWallet = async (req: Request, res: Response) => {
    console.log("createWallet");

    const newWallet = Keypair.generate();
    const answer = {
        public: newWallet.publicKey.toBase58(),
        private: newWallet.secretKey.toString()
    }

    res.send({"status": "ok", "data": answer});
};

export const executePayment = async (req: Request, res: Response) => {
    // Transfers some token from the buyer to the seller.

    // Connect to cluster
    const connection = new Connection(Config.rpcNode, Config.confirmLvl);
    console.log('hash', (await connection.getLatestBlockhash()));

};


/*
(async () => {

    // Generate a new wallet keypair and airdrop SOL
    const fromWallet = Keypair.generate();
    const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);

    // Wait for airdrop confirmation
    await connection.confirmTransaction({
        signature: fromAirdropSignature,
        ...(await connection.getLatestBlockhash()),
    });

    // Generate a new wallet to receive newly minted token
    const toWallet = Keypair.generate();

    // Create new token mint
    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);

    // Get the token account of the fromWallet address, and if it does not exist, create it
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey,
    );

    // Get the token account of the toWallet address, and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWallet.publicKey);

    // Mint 1 new token to the "fromTokenAccount" account we just created
    let signature = await mintTo(
        connection,
        fromWallet,
        mint,
        fromTokenAccount.address,
        fromWallet.publicKey,
        1000000000,
        [],
    );
    console.log('mint tx:', signature);

    // Transfer the new token to the "toTokenAccount" we just created
    signature = await transfer(
        connection,
        fromWallet,
        fromTokenAccount.address,
        toTokenAccount.address,
        fromWallet.publicKey,
        1000000000,
        [],
    );
    console.log('transfer tx:', signature);
})();
*/