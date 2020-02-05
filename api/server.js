const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('../auth/auth-router.js');
const jobRouter = require('../jobs/jobs-router')

const server = express();

const corsOptions = {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  };

server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json());

server.use('/api/auth', router);
server.use('/api/jobs', jobRouter);

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
 