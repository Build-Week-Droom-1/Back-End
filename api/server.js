const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', router);

server.get('/', async (req, res) => {
    try {
      const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
      res.status(200).json({ motd: messageOfTheDay}); // change this line
    } catch (error) {
      console.error('\nERROR', error);
      res.status(500).json({ error: 'Cannot retrieve' });
    }
  });
module.exports = server;
 