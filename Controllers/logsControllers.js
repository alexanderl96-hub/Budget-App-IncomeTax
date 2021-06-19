const express = require('express')
const logs = express.Router()
const arrayI = require("../Models/logs.js")

logs.get("/:index", (req, res)=>{
    const {index} = req.params
     if(arrayI[index]){
         res.status(200).json(arrayI[index])
     }else{
         res.redirect('/404')
     }
})

logs.get("/", (req, res)=>{
    res.json(arrayI)
})

logs.post("/", (req, res)=>{
    arrayI.push(req.body)
    res.json(arrayI[index.length - 1])
})
logs.delete("/:index", (req, res)=>{
    const {index} = req.params
     if(arrayI[index]){
         arrayI.splice([index], 1)
         res.status(200).json(arrayI)
     }else{
         res.redirect("/404")
     }
})

module.exports = logs