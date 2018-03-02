const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

let urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express()
let names = []

app.use(express.static('public'))
app.use(bodyParser());
app.use(cors());
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
  res.set('statusText', 'Niceeeee');
  res.render('home', {names: names});
})

app.post('/', (req, res, next)=>{
  console.log(req.body);
  let name = {"name": req.body.name}
  names.push(name)
  res.render('home', {names: names})
})

var server = app.listen(process.env.PORT || 3000);
