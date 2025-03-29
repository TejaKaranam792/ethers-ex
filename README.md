# 🚀 Ethers-ex

## 📌 Overview
Ethers-ex is a structured repository designed for working with **Ethers.js** to interact with Ethereum smart contracts. This project covers:
- Writing and deploying **smart contracts**
- **Reading** from contracts using Ethers.js
- **Writing** transactions to contracts using Ethers.js
- Using **queryFilter** to listen to smart contract events

## 📂 Folder Structure
```
ethers-ex/
│── contracts/         # Smart contracts written in Solidity
│── scripts/           # Scripts to interact with the blockchain
│── test/              # Testing smart contracts
│── .env               # Environment variables (not pushed to GitHub)
│── package.json       # Project dependencies
│── README.md          # Project documentation
```

## 🔧 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/ethers-ex.git
   cd ethers-ex
   ```

2. **Install dependencies**
   ```sh
   npm install ethers dotenv
   ```

3. **Set up environment variables**
   - Create a `.env` file and add the following:
   ```env
   PRIVATE_KEY="your_private_key_here"
   RPC_URL="your_rpc_provider_url_here"
   ```

## 🚀 Usage
### Running Scripts
- **Read a contract**:
  ```sh
  node read_contract.js
  ```
- **Write to a contract**:
  ```sh
  node write_contract.js
  ```
- **Listen for events using queryFilter**:
  ```sh
  node events_listener.js
  ```

## 📜 Smart Contract Example
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transfer {
    address public owner;
    event Transactions(address indexed to, uint indexed amount);

    constructor() {
        owner = msg.sender;
    }

    function callOwner() public view returns (address) {
        return owner;
    }

    function sendEther(address payable _to) public payable {
        _to.transfer(msg.value);
        emit Transactions(_to, msg.value);
    }
}
```

## 📜 License
This project is **open-source** and available under the MIT License.

## 👤 Author
- **Teja Karanam**
- [GitHub](https://github.com/your-tejaKaranam792)
- [LinkedIn](https://linkedin.com/in/teja-karanam-60a14a267/)

---
### ⭐ If you like this project, give it a star on GitHub! ⭐

