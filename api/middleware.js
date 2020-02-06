const express = require('express');
const jobDB = require('../jobs/jobs-model');

const logger = (req,res,next)=>{
    console.log(`the request:${req.method} made to:${req.originalUrl}`)
    next();
}

const validateJob=(req,res,next) =>{
    if(!req.body){
        res.status(400).json({message:'missing job data'})
        }else{
            next();
        }
    }

function validateJobId(req, res, next) {
    jobDB.getById(req.params.id)
    .then((job)=>{
        if(job === undefined){
            res.status(404).json({message:'id not found'})
        }else{
            next();
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
  }

module.exports={
    logger,
    validateJob,
    validateJobId
};
