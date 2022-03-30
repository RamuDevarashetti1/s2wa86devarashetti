var express = require('express');
var router = express.Router();


/* GET computation page. */
router.get('/', function(req, res, next) {
var random = Math.random();
var x;
x = req.query.x;

if (x == undefined) {
  x = random;
}

let acosh = Math.acosh(x) 
let log1p = Math.log1p(x)
let tan = Math.tan(x) 
let sqrt = Math.sqrt(x) 

res.render('computation', {
  title: 'Computation of Math functions',
  values: `Math.acosh(),Math.log1p(),Math.tan(),Math.sqrt() are applied to 
  ` + x + ` is ` + acosh + `,` + log1p + `,` + tan + `,` + sqrt 
});
});

module.exports = router;