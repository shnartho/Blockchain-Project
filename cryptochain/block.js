class Block {
     constructor({timestamp, lastHash, hash, data}){
     this.timestamp = timestamp;
     this.data = data;
     this.hash = hash; 
     this.lastHash = lastHash;
   
        

    }
}

module.exports = Block;