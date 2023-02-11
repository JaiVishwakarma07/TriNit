require("dotenv").config()
const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect(
  `mongodb+srv://aayush:${process.env.PASSWORD}@cluster0.4juuo4v.mongodb.net/?retryWrites=true&w=majority`
)

app.get("/", (req, res) => {
  return res.json("Hello World")
})

app.listen(5000, () => {
  console.log("Running at 5000")
})
