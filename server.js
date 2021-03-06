const express = require('express');  
const app = express();  
app.use(express.static(__dirname + '/dist/cinema-app'));  
app.all('*', function (req, res) {  
  res.status(200).sendFile(__dirname + '/dist/cinema-app/index.html');  
});  
app.listen(process.env.PORT || 8080); 