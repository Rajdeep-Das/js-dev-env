/* eslint-disable no-console */

import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port  = 3000;
const app = express();
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler,{
  publicPath: config.output.publicPath
}));


app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/api/users', (req, res) => {
  res.json([
    {"id" : 1,"firstName":"Rajdeep" , "lastName":"Das", "email":"rajdeepdas.india@gmail.com"},
    {"id" : 2,"firstName":"Rajdeep" , "lastName":"Das", "email":"rajdeepdas.india@gmail.com"},
    {"id" : 3,"firstName":"Rajdeep" , "lastName":"Das", "email":"rajdeepdas.india@gmail.com"},
    {"id" : 4,"firstName":"Rajdeep" , "lastName":"Das", "email":"rajdeepdas.india@gmail.com"},
    {"id" : 5,"firstName":"Rajdeep" , "lastName":"Das", "email":"rajdeepdas.india@gmail.com"}
  ]);
});


app.listen(port,(err) => {
  if(err) { console.log(err) }
  else {
    open(`http://localhost:${port}`);
  }
});
