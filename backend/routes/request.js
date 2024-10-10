const express = require('express')
const Request = require('../models/RequestModel')

const router = express.Router()

// post a new request
router.post('',async (req,res)=>{
    const {Entity,Country,Country2,ISP,Domain,DashboardName,Is_Amazon,Is_Paypal,Is_Fedex,Is_Insurance,Is_Hardbounce} = req.body.dataRequest
    const {ISP2,Provider,Filter,ListName,AdditionalInformation} = req.body.insertionCondition

    console.log(req.body)
    try {
        // Create New Request
        const request = await Request.create({Entity,Country,Country2,ISP,Domain,DashboardName,ISP2,Provider,Filter,ListName,AdditionalInformation,Is_Amazon,Is_Paypal,Is_Fedex,Is_Insurance,Is_Hardbounce})
        res.status(200).json(request)
    } catch (error){
        res.status(400).json({error : error.message})
    }
})



module.exports =    router