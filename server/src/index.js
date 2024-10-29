const express = require('express');
const app = express();
const {PORT} = require("./config/serverConfig");
const cors = require('cors');
const apiRoutes = require("./routes/index")
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api" , apiRoutes)

const SetupAndStartServer = () => {
     app.listen(PORT ,() => {
          console.log('Server is running on port 3000');
     })
}

SetupAndStartServer();