const express = require("express");

// Path module
const path=require("path");

const fs = require("fs");

const app = express();
const port = 80;

// severing static files
app.use('/static', express.static('Static'))      

 