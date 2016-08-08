var express = require("express");
var app = express();
var fs = require('fs');

app.use(express.static("public"));
app.set("view engine", "ejs");

var web_projects_results;
var graphic_projects_results
fs.readFile('json/web_projects.json', 'utf8', function(err, data){
  if(err){
    throw err;
  } else {
    web_projects_results = JSON.parse(data)
  }
})
fs.readFile('json/graphic_projects.json', 'utf8', function(err, data){
  if(err){
    throw err;
  } else {
    graphic_projects_results = JSON.parse(data)
  }
})


// ========================
//ROUTES
// ========================

app.get("/", function(req, res) {
  res.render("index", {
    title: 'Home',
    web_projects: web_projects_results,
    graphic_projects : graphic_projects_results
  });
});

app.get("/about", function(req, res) {

})

app.get("/projects", function(req, res) {
    res.render("projects", {
    title: 'Projects',
    projects: results
  });
})

app.get("*", function(req, res) {

})

app.listen(3000, function(){
  console.log("Personal Portfolio Server has started")
})