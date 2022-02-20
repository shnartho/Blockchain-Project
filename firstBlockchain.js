const generateNewHash = (data) => {
    return '$$' + data + '$$';
}

class Block {
    constructor(data, thisHash, prevHash){
        this.data = data;
        this.thisHash = thisHash;
        this.prevHash = prevHash;
    }
}

class BlockChain {
    constructor() {
        const genesis = new Block('Welcome to the first block(Genesis Block)', 'Genesis Hash', '000000000');
        this.chain = [genesis];
    }
    addingBlock(data){
        const prevHash = this.chain[this.chain.length-1].thisHash;
        const thisHash = generateNewHash(data + prevHash);
        const newBlockInstance = new Block(data, thisHash, prevHash);
        this.chain.push(newBlockInstance);

    }
}

const nayemBlockchain = new BlockChain();

nayemBlockchain.addingBlock('secondBlock');
nayemBlockchain.addingBlock('thirdBlock');
nayemBlockchain.addingBlock('fourthBlock');

console.log(nayemBlockchain);
console.log("so we have created " + nayemBlockchain.chain.length + " block so far");
console.log("----------Thanks for checking-----------");