const express = require("express");
const controllers = require("./Controllers/logsControllers.js")
const cors = require("cors");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Budget-Incomen App!");
  });

app.use("/logs", controllers)
app.get("*", (req,res)=>{
    res.send("<h3>Page not Found</h3>")
})

module.exports = app;