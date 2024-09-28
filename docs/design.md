# Architecture & Features

### Overview

1. Android POS app
    1. Configure wallet.
    2. Setup an NFC charge.
2. iOS Client app
    1. Configure wallet.
    2. Fund and Mint the stablecoin to execute payments: MXNS
    3. Execute an NFC payment.
3. Backend + Solana settlement.
    1. MXNS Program
    2. Giopay payments program
    3. TS API for both

### MXNS

The MXNS (Mexican Peso by SAFT.Industries) stablecoin. In the hackathon version, clearly is not connected to any actual banking service, so it's just a mock version.

### GIOPAY PROGRAM

The on-chain Solana program to execute the payments.

### GIOPAY BACKEND

The Node backend service to process all operations.


