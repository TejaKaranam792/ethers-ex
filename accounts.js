const {ethers} = require("ethers");
require("dotenv").config();
const RPC='https://eth-sepolia.g.alchemy.com/v2/SgGx0Iotvt3BtyMkISY8EKjKPUJ9c2t1';
const account1='0xE71ED67C6dAfa95A82F1FB54d7C52B656B6D121F';
const privatekey=process.env.PRIVATE_KEY;

const provider=new ethers.JsonRpcProvider(
  RPC
)

const wallet=new ethers.Wallet(privatekey,provider);



async function call(){
  const bal=await provider.getBalance(account1)
  console.log(account1,": ",ethers.formatEther(bal));
  console.log(await wallet.getAddress(),": ",ethers.formatEther(await provider.getBalance(wallet.address)));

  const trans=await wallet.sendTransaction({
    to: account1,
    value: ethers.parseEther('0.009'),
})
  await trans.wait();
  const bal1=await provider.getBalance(account1)
  console.log(account1,": ",ethers.formatEther(bal1));
  console.log(await wallet.getAddress(),": ",ethers.formatEther(await provider.getBalance(wallet.address)));
}

call();

