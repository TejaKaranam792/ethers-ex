const {ethers} = require('ethers');
require("dotenv").config();
const RPC='https://eth-sepolia.g.alchemy.com/v2/SgGx0Iotvt3BtyMkISY8EKjKPUJ9c2t1';
const account1='0xE71ED67C6dAfa95A82F1FB54d7C52B656B6D121F';
const privatekey=process.env.PRIVATE_KEY;

const provider = new ethers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(privatekey, provider);

const contractAddress = '0xC0D3F34009912e73FB63eB26B679b801818396AC';


async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        [
          {
            "inputs": [
              {
                "internalType": "address payable",
                "name": "_to",
                "type": "address"
              }
            ],
            "name": "_transfer",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transactions",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "callOwner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ],
        wallet
    )

    console.log(`${account1} : ${ethers.formatEther(await provider.getBalance(account1))}`)

    console.log(`${await wallet.getAddress()} : ${ethers.formatEther(await provider.getBalance(wallet.address))}`)

    const tx = await contract._transfer(account1, {
      value: ethers.parseEther('0.005')
    })

    await tx.wait();

    console.log(`${account1} : ${ethers.formatEther(await provider.getBalance(account1))}`)

    console.log(`${await wallet.getAddress()} : ${ethers.formatEther(await provider.getBalance(wallet.address))}`)

    console.log(tx);

}

call();