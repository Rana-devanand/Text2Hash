const crypto = require('crypto');

class HashServices {
     async createHash(sha, data) {
          try {
               const supportedHashed = crypto.getHashes();
               if (!supportedHashed.includes(sha)) {
                    return `Unsupported hash algorithm: ${sha}`;
               }
               const hash = crypto.createHash(sha).update(data).digest('hex');
               console.log(hash);
               return hash;
          } catch (error) {
               console.error(error);
          }
     }
}

module.exports = HashServices;
