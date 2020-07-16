const express = require("express");
const bodyParse = require('body-parser');
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=> {
    res.send('Hello');
});

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log(`server is running on port" ${port}`);
});