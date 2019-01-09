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
    mongoose.connect("mongodb://localhost/ScraperHW", {useNewUrlParser: true});



    app.get("/scrape", function(req, res){
        axios.get("https://www.nytimes.com/section/world").then(function(response){
            const $ = cheerio.load(response.data);

            $("article h2 a").each(function(i, element) {
                var result = {};
                result.title = $(this).text();
                result.link = $(this).attr("href");
                db.Article.create(result).then(function(dbArticle)
                {console.log(dbArticle);
                }).catch(function(err){
                    console.log(err);
                });
            });
        });
        res.send("Completed Scrape")
    });

    // server status and console
    app.listen(PORT, function() {
        console.log("App running on port " + PORT + ", yeehaw!");
    });