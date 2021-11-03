# IPFS Publisher

This dApp allows users to publish images on IPFS and store information about posts (image IPFS-url, description, address of the account that posted the image, hashtags associated whit post). 
Users will see a list of posts tagged with fallowed hashtags. The number of votes for each post is also displayed. Each tag has fallow/unfollow options. 

Code is written in Solidity and React.


## Project setup
Make sure you first install truffle and Ganche.

```console
npm i -g truffle

```

Install  node pachages.

```console
npm i -g http-server
```

```console
npm install
```

Run **webpack** utility to combine all dependencies and create **dist\bundle.js** file. For more details check **webpack.config.js** file.
```console
node_modules\.bin\webpack -w
```

In a new terminal window run and open the app in broser: [localhost url](http://127.0.0.1:8080/).

```console
http-server dist/ 
```

## Ganache and metamask setup

Create a new Ganche workspace.

![Ganache workspace](https://live.staticflickr.com/65535/51649749269_0d97aa8010_b.jpg)

Add local network in Metamask Extension.

![Ganache workspace](https://live.staticflickr.com/65535/51650232665_2262526522_b.jpg)

![Ganache workspace](https://live.staticflickr.com/65535/51650034494_85daae6a93_b.jpg)

Add Ganahe account to metamask. Use “Show Keys—Private key” and Import Account. Make sure this is the active account when calling transactions.

![metamask account](https://live.staticflickr.com/65535/51651633798_628f400ae9_b.jpg)

![metamask account](https://live.staticflickr.com/65535/51651420541_6092ffa364_b.jpg)

## Deploy smart-contract IpfsPublisher on local network or ropsten test network. 

If you need to modify the contract check **contracts\IpfsPublisher.sol**

Check truffle-config.js

```js
networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      gas: 6721975,
      network_id: "5777",       // Any network (default: none)
     } ,
     ropsten: {
       provider: () => new HDWalletProvider(mnemonic, infuraKey),
       network_id: 3,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
     
     ...
```

Add **.secret** file that stores the infura key, or comment ropsten network in **truffle-config.js** if you don’t plan to deploy on ropsten test net.


```js
const HDWalletProvider = require('truffle-hdwallet-provider')
const infuraKey = "https://ropsten.infura.io/v3/0f065a22ef7d4b8188d7ac7ca*******"
const fs = require('fs')
const mnemonic = fs.readFileSync(".secret").toString().trim()
```

Deploy contract on localhost network and copy build\contracts\IpfsPublisher.json in ABI.js

```console
truffle deploy --network development --reset
```

or

```console
truffle deploy --network ropsten --reset
```

## web3 setup 

Copy **build\contracts\IpfsPublisher.json** in **src\ABI.js**

```js
const ABI = { … }
```

Make sure you select local network or ropsten network when calling **web3.eth.contract**

```js
window.web3js = new Web3Js(ethereum)
try {
     ethereum.request({ method: 'eth_requestAccounts' })
} catch (error) {
     alert('You must approve this dApp to interact with it, reload it to approve it')
}       

const user = (await web3js.eth.getAccounts())[0]
window.contract = new web3js.eth.Contract(ABI.abi, ABI.networks["5777"].address, 
     {from: user})
```

