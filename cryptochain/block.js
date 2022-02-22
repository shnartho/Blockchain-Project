class Block {
    constructor({timestamp, lastHash, hash, data}){
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
   
        

    }
}

const block1 = new Block({
    timestamp: '01/02/2008',
    lastHash: '0000',
    data: 'Half fenny recieved 100 bitcoin',
    hash: 'Willgenerate a new hash'
    
});
console.log('block1', block1)