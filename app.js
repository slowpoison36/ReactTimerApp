var express = require("express");
var app = express();

const PORT= process.env.PORT||3000;
app.use(express.static("public"))




app.listen(PORT,process.env.IP,function(){
	console.log("React app running");
})