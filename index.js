var express = require('express');
var app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`En: http://localhost:${ port }`);
});

app.set('view engine', 'pug');

app.get('/prueba-jade', function(req,res){
  res.render('index');
});
