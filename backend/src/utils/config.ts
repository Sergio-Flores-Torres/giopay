// Global Configration object with safe defaults

export const Config = {
    port:parseInt(process.env.PORT || "3000"),
    rpcNode:process.env.RPCNODE || "https://api.devnet.solana.com",
};