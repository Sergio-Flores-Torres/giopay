# Architecture & Features

### Overview

1. Android POS app
    1. Configure wallet.
        - Send request to backend to create keypair. This is non-custodial to start, 
        so, although the backend creates it, it is sent back to the client for storage. This approach has several advantages:
            a) Allows us to offer custodial services in the future
            b) Allows us to track all operations
            c) Allows us to pay for our clients transactions in SOL, thus relieving them from the need to keep a SOL balance
            d) Allows us to use the TS Solana libraries, server side, safer and controlled, and not have also Android/iOS Solana code.
    2. Setup an NFC charge.
2. iOS Client app
    1. Configure wallet.
        - Same as Android.
    2. Fund and Mint the stablecoin to execute payments: MXNS
    3. Execute an NFC payment.
        - Send request to backend, have Giopay pay for the tx, and create the recipient's ATA if needed.
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


