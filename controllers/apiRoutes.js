const express = require("express");
const app = express();
const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

app.get("/scraper", (req, res) => {
    res.send("Make some noise!");
});

module.exports = app;