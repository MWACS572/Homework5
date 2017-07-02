var express = require("express");
var app = express();
var port = 3000;

app.get("*", function(req, res){
    res.status(200);
    res.set('content-Type', 'text/html');
    res.send("hi");
    res.end()
});
app.listen(port, function(){
    console.log("the server is running on port: ", port);
});