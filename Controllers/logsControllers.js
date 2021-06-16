const express = require('express')
const logs = express.Router()
const Array = require("../Models/logs.js")

logs.get("/:Index", (req, res)=>{
    const {Index} = req.params
     if(Array[Index]){
         res.status(200).json(Array[Index])
     }else{
         res.redirect('/404')
     }
})

logs.get("/", (req, res)=>{
    res.json(Array)
})

logs.post("/", (req, res)=>{
    Array.push(req.body)
    res.json(Array[Index.length - 1])
})
logs.delete("/:Index", (req, res)=>{
    const {Index} = req.params
     if(Array[Index]){
         Array.splice([Index], 1)
         res.status(200).json(Array)
     }else{
         res.redirect("/404")
     }
})

module.exports = logs