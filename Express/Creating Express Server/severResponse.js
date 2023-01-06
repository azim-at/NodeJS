// Creating express server
const express = require("express");
const app = express();

// Get Request and Response
app.get("/", function(request, response) {
    response.send("Hello world");
});

app.listen(3000, function() {
    console.log("Server started at port 3000")
});