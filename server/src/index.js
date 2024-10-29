const express = require('express');
const app = express();
const {PORT} = require("./config/serverConfig");

const SetupAndStartServer = () => {
     app.listen(PORT ,() => {
          console.log('Server is running on port 3000');
     })
}

SetupAndStartServer();