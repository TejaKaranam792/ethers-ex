const {ethers} = require('ethers');
const transfer = require('../transfer.json');

const RPC='https://eth-sepolia.g.alchemy.com/v2/SgGx0Iotvt3BtyMkISY8EKjKPUJ9c2t1';

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0x5ffed6daf4f1b4bb3402df8c3c11874db1744087';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    const block = await provider.getBlockNumber();
    

    const trans = contract.filters.transactions(null, '1000000000000000000');
    const transactions = await contract.queryFilter(trans)

    transactions.map((item) => {
        console.log(item.args.to, ":", ethers.utils.formatEther(item.args.amount))
    })

    
}

call();