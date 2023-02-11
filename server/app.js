// require("dotenv").config()
import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

// const mongoose = require("mongoose")
// mongoose.connect(
//   `mongodb+srv://aayush:${process.env.PASSWORD}@cluster0.4juuo4v.mongodb.net/?retryWrites=true&w=majority`
// )

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "trinit"
})

app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
  res.json("running")
})

//all ngos
app.get("/ngos", (req, res) => {
  const q = "SELECT * FROM ngo"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

//select ngos from name 
app.get("/ngos/ngo/:name", (req, res) => {

  const ngoname = req.params.name;
  const q = "SELECT * FROM ngo WHERE name = ?"
  db.query(q, [ngoname], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

//add ngo
app.post("/ngos", (req, res) => {
  const q = "INSERT INTO ngo (`name`,`location`,`password`,`workingarea`,`field`,`funding`,`GSTIN`,`photo`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.location,
    req.body.password,
    req.body.workingarea,
    req.body.field,
    req.body.funding,
    req.body.GSTIN,
    req.body.photo,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("data has been added created")
  })
})

//all philan
app.get("/phil", (req, res) => {
  const q = "SELECT * FROM phalin"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

//add philan
app.post("/phil", (req, res) => {
  const q = "INSERT INTO phalin (`name`,`orgnisation`,`location`,`interest`,`funds`,`photo`,`password`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.orgnisation,
    req.body.location,
    req.body.interest,
    req.body.funds,
    req.body.photo,
    req.body.password
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("data has been added created")
  })
})


app.listen(5000, () => {
  console.log("Running at 5000")
})
