// Creating express server
const express = require("express");
const app = express();

// Get Request and Response
app.get("/", function(request, response) {
    console.log(request);
});

app.listen(3000, function() {
    console.log("Server started at port 3000");
});