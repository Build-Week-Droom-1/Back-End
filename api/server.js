const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', router);

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;
