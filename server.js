const express = require("express");
const connectDB = require("./cf/comong");
const app = express ();

//3- setup your env

require("dotenv").config({path :"./config/.env"})
