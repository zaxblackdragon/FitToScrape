    // Dependencies 
    const express = require("express");
    const app = express();
    const logger = require("morgan");
    const mongoose = require("mongoose");
    const axios = require("axios");
    const cheerio = require("cheerio");
    const PORT = process.env.PORT || 3000
    const db = require("./models")
    const path = require('path');

    app.use(logger("dev"));


    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static("public"));

    app.get("/", function(req, res) {
        res.send("Howdy!")
    });

    // Mongo and Mongoose
   // mongoose.connect("mongodb://localhost/ScraperHW", {useNewUrlParser: true});
   const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
   mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
   
    // sets routing through the controllers
    const routing = require("./controllers/apiRoutes");
    app.use(routing);

    // server status and console
    app.listen(PORT, function() {
        console.log("App running on port " + PORT + ", yeehaw!");
    });