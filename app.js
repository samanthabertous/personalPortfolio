var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// ========================
//ROUTES
// ========================

app.get("/", function(req, res) {
  res.render("index")
});

app.get("/about", function(req, res) {

})

app.get("/work", function(req, res) {

})

app.get("*", function(req, res) {

})

app.listen(3000, function(){
  console.log("Personal Portfolio Server has started")
})