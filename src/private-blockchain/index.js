const hash = require('crypto-js/sha256')
var md5 = require('md5');

class Block {
    constructor(prevHash, data, username, myname) {
        this.prevHash = prevHash;
        this.data = data;
        this.timeStamp = new Date();
        this.username = username 
        this.myname = myname

        this.hash = this.calculateHash()
        this.privateKey = this.getPrivateKey(); 
        this.myPrivateKey = this.myPrivateKey();
    }

    getPrivateKey() {
        return md5(this.username)
    }

    myPrivateKey() {
        return md5(this.myname)
    }

    calculateHash() {
        return hash(this.prewHash+JSON.stringify(this.data)+this.timeStamp).toString();
    }
}

class Blockchain {
    constructor() {
        const genesisBlock = new Block('0000', {
            isGenesis: true
        }, 'Nguyen Hoai Phong', 'Admin')

        this.chain = [genesisBlock];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(data, username, myname) {
        const lastBlock = this.getLastBlock();
        const newBlock = new Block(lastBlock.hash, data, username, myname)

        this.chain.push(newBlock)
    }
}

const blockChain = new Blockchain();

blockChain.addBlock({
    from: 'Nguyen Hoai Phong',
    to: 'Vu Cat',
    amount: 100
}, 'Vu Cat','Nguyen Hoai Phong')

blockChain.addBlock({
    from: 'Quang Tan',
    to: 'Nguyen Cong Hieu',
    amount: 200
}, 'Nguyen Cong Hieu','Quang Tan')

blockChain.addBlock({
    from: 'Nguyen Duc Phuc',
    to: 'Quang Tan',
    amount: 300
}, 'Quang Tan','Nguyen Duc Phuc')

module.exports = {
    blockChain
};