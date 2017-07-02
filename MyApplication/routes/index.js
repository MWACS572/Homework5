var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
const title1 = fetch('http://jsonplaceholder.typicode.com/users/');
/* GET home page. */
 var value = title1.then((data)=>{return data.json()}).catch((err)=>err);
router.get('/', function(req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users/')
  .then(data=>data.json())
  .then(data=>res.render('index', {title:data}));

  
});

module.exports = router;
