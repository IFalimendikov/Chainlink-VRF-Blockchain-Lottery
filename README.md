# Chainlink-VRF-Blockchain-Lottery
This smart contract and DApp allows to host a lottery wiht a fixed amount of players with a winner chosen my the Chainlink VRF Oracle.

Important! Be aware that in order for this DApp to operate properly, you need to create a new .env file with your wallet private key, Etherscan APi and node URl.

Also, in the file /constants/index.js you will need to put different parameteres for LINK, VRF Coordinator and Key hash depending on the chain you using. You can find full list of chains here: https://docs.chain.link/vrf/v1/supported-networks
