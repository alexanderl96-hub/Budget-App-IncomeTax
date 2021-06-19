const express = require('express')
const logs = express.Router()
const arrayI = require("../Models/logs.js")


const validateUrl = (req, res, next) => {
    const http = "http://";
    const https = "https://";
    var fullUrl = req.protocol + "://" + req.get("host") + req.url;
    // console.log(`[development] Request URL: ${fullUrl}`);
    if (fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https) {
      return next();
    } else {
      res
        .status(400)
        .send(`Oops, you forgot to start your url with http:// or https://`);
    }
  };

  const validateBody = (req, res, next) => {
    const { date, taxes, retirement, save,  creditcard, market, internet, pet, car, insurrance, additional } = req.body;
    if (!date) {
      res.status(400).send();
    }
    next();
  };
  
  arrayI.use(validateUrl);

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

logs.post("/", validateBody , (req, res) =>{
    arrayI.push(req.body)
    res.json(arrayI[index.length - 1])
})
logs.delete("/:index", validateBody , (req, res)=>{
    const {index} = req.params
     if(arrayI[index]){
         arrayI.splice([index], 1)
         res.status(200).json(arrayI)
     }else{
         res.redirect("/404")
     }
})

module.exports = logs