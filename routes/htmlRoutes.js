var path = require("path");
const Router = require("express").Router();


  Router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // html to display the exercise route for entering exercises
  Router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // html to display the stats route
  Router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports = Router;
