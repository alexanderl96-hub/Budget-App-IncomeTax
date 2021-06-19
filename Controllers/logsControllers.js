const express = require('express')
const logs = express.Router()
const arrayI = require("../Models/logs.js")


  // const validateBody = (req, res, next) => {
  //   const { date, taxes, retirement, save,  creditcard, market, internet, pet, car, insurrance, additional } = req.body;
  //   if (!date) {
  //     res.status(400).send();
  //   }
  //   next();
  // };
  
  

logs.get("/:arrayIndex", (req, res)=>{
    const {arrayIndex} = req.params
     if(arrayI[arrayIndex]){
         res.status(200).json(arrayI[arrayIndex])
     }else{
         res.redirect('/404')
     }
})

logs.get("/", (req, res)=>{
    res.json(arrayI)
})

logs.post("/",  (req, res) =>{
    arrayI.push(req.body)
    res.json(arrayI[arrayI.length - 1])
})
logs.delete("/:arrayIndex", (req, res)=>{
    const {arrayIndex} = req.params
     if(arrayI[arrayIndex]){
         arrayI.splice([arrayIndex], 1)
         res.status(200).json(arrayI)
     }else{
         res.redirect("/404")
     }
})

module.exports = logs