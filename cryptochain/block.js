const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
     constructor({timestamp, lastHash, hash, data}){
     this.timestamp = timestamp;
     this.data = data;
     this.hash = hash; 
     this.lastHash = lastHash;
     }
   
     static genesis(){
         return new this(GENESIS_DATA);
     }

     static mineBlock({lastBlock, data}){
         const timestamp = Date.now();
         const lastHash = lastBlock.hash;

         return new this({
             timestamp,
             lastHash,
             data,
             hash: cryptoHash(timestamp, lastHash, data)
         });
     }     
}

module.exports = Block;