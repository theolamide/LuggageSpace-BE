const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();


server.use(helmet());
server.use(cors());


server.get("/", (req, res) => {
    res.status(200).send("<h2>LuggageSpace API is alive!</h2>")
});


module.exports = server;