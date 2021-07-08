const express = require('express')
const transactions = express.Router()
const arrayI = require("../Models/logs.js")


//   const validateBody = (req, res, next) => {
//     const { date, taxes, retirement, save,  creditcard, market, internet, pet, car, insurrance, additional , made} = req.body;
//     if (!date || !taxes || !retirement || !save || !creditcard || !market || !internet || !pet || !car || !insurrance || !additional || !made) {
//       res.status(400).send();
//     }
//     next();
//   };
  
  

transactions.get("/:arrayIndex", (req, res)=>{
    const {arrayIndex} = req.params
     if(arrayI[arrayIndex]){
         res.status(200).json(arrayI[arrayIndex])
     }else{
         res.redirect('/404')
     }
})

transactions.get("/", (req, res)=>{
    res.json(arrayI)
})

transactions.post("/",  (req, res) =>{
    arrayI.push(req.body)
    res.json(arrayI[arrayI.length - 1])
})

transactions.put("/:arrayIndex",  (req, res) => {
    const { arrayIndex} = req.params;
  
    if (arrayI[arrayIndex]) {
      arrayI[arrayIndex] = req.body;
      res.json(arrayI[arrayIndex]);
    } else {
      res.redirect("/404");
    }
  });

  transactions.delete("/:arrayIndex", (req, res)=>{
    const {arrayIndex} = req.params
     if(arrayI[arrayIndex]){
         arrayI.splice([arrayIndex], 1)
         res.status(200).json(arrayI)
     }else{
         res.redirect("/404")
     }
})

module.exports = transactions