// Global Configuration object with safe defaults
import { Commitment } from '@solana/web3.js';

export class Config {
    public static port:number = parseInt(process.env.PORT || "3000");
    public static rpcNode:string = process.env.RPCNODE || "https://api.devnet.solana.com";
    public static confirmLvl:Commitment = (process.env.CONFIRMATIONLEVEL || "confirmed") as Commitment;
    public static apiKey:string = process.env.APIKEY;
}