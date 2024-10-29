const HashServices = require("../services/Hash-Services")
const hashServices = new HashServices();
const create = async (req, res) => {
     try {
          console.log(req.body.sha , req.body.data)
          const response = await hashServices.createHash(req.body.sha , req.body.data);
          return res.status(200).json({
               data : response,
               success: true,
               message: "SHA256 Hash generated successfully",
               // hash: HashServices.generateSHA256(response.data)
          })

     } catch (error) {
          console.error(error);
          return res.status(500).json({
                data: null,  // Return null if there's an error
                success: false, 
                message: error.message 
                // hash: HashServices.generateSHA256(error.message)
               });
     }
}

module.exports = {
     create
};