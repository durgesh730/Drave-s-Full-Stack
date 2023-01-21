const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")
const router = require("./Router/routes")
const connectToMongoose = require('./Database/conn')

connectToMongoose();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(` Listening on port http://localhost:${port}`)
})