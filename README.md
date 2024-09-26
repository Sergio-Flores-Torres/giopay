# Giopay (working name not final)
Contactless NFC Solana mobile stablecoin payment app. 

Like a card payment, but powered by Solana. Seller has the Giopay Android app, called POS, to act as a NFC host and define the payment, client has an iOS app to authorize and pay. 

### Motivation

In a recent trip to South Korea, I found many issues with paying for local services:

- Terminals that only accept domestically issued cards.
- Strange delays and rejections on payments on some or all of my cards in some establishments. A given coffeeshop would accept one of my cards without issue, while the supermarket next door would reject 3 out of 4 of my cards.
- Different POS standards; some offer contactless, others require a NIP, others insist on a signature, plus the cashiers are not really familiar with the features of their device.
- Various malfunctions such as a terminal reporting my NIP as incorrect.
- While my bank offers notifications on purchases... they never arrived.
- I found close to impossible to check the validity of the transactions, since my bank took DAYS to report them on my statement, sometimes more than 1 week.
- Obscure FX fees to convert from the purchase price, to my card denomination.
- The need to withdraw cash in local currency from ATM's, both paying a spread on the FX, and one or more usage fees to the involved banks.
- The inability to set and track a budget, or identify and compare the exact amounts paid for things such as food and entertainment.

Interestingly though, I don't recall having had as much problems in my trip to Japan, so I suspect that there is a lot more happening on the background thatn we see,that is actually making some issues worse in some locations.

Regardless, the problem persists, so I'd like to offer a solution.

### The Solution: Giopay (working name not final)

Giopay is a mobile app that offers 2 versions, one for merchants and one for customers, in principle, designed for small business use, with the following features:

- Based on Solana stablecoins, currently with support for USDC.
- Both parties keep a balance in the right stablecoin, and **the apps are NFC enabled to execute a contactless transfer**.
- The demo or hackathon version does not include a funding feature, simply beause I don't have agreements in place with banks to provide a seamless funding option, however, it should be included in the future.
- For the time being, the customer has to buy the stablecoin on an exchange and send it to its app wallet. The plan is to allow for direct stablecoin minting from the app. 
- This hackathon version also does not include a proprietary stablecoin, because, while I can program it, again, I don't have the bank support to operate it and so it would not be functional at this time.

### Benefits of the design

- No FX fees on each transaction. The idea is that you fund your wallet with X amount of the stablecoin that you need, and in doing so, you may or may not incur in an FX spread, but once that's done, all the smaller payments are funded from that account and incur no other fees.
- The plan is to have Giopay ***ISSUE ITS OWN 1:1 STABLECOINS FOR ANY COUNTRY SUPPORTED*** and not allow trading of these, to block potential price issues; rather a deposit mints the coins, and a withdrawal burns them, and meanwhile they are kept in ***interest bearing cash equivalents and short term securities*** which actually fund the operation of the service, in order to offer ***ZERO OR VERY LOW TX FEES*** with a stable payment method.
- So if you travel to Mexico, you fund with the MXN coin, and from then on, all your payments are from it, and the merchant is receiving an MXN equivalent, which they can spend directly on chain if applicable, or withdraw to a local bank account. Same to South Korea, Japan, etc.
- Of course, the legal details of this plan have not been fully fleshed out, since for now, the purpose is just to provide a PoC and demonstrate how it would work.

The above approach solves every issue I faced during my trip:

- The country of origin of the parties to the transaction, or their location, is irrelevant for the purposes of payment. Of course, regulations and reporting may apply.
- The technology and settlement is global in nature. No differing standards apply. 
- It will work wherever there's a valid Internet connection.
- The app can, in principle, offer simple reporting, which of course can be improved in the future.
- With low fees it can serve as a cash replacement whenever possible.

### Looking into the future

- Giopay can offer credit, investments, BNPL or cash advances to its users.
- It can also offer direct funding/withdrawing of stablecoins.
- Keep balances in coins on all available currencies, with transfers among them.
- Have Link/Email/Wallet/Phone based transfers. 
- Expand on information reporting and analytics.
- Offer other services like insurance, extended warranties, purchase protection, etc as appropriate.











