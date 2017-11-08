const express=require("express");
const querystring=require("querystring");
const mysql=require("mysql");
const ejs=require("ejs");
const app=express();
const router=express.Router();
const bodyParser=require('body-parser');
const fs=require('fs');
//设置模板引擎的加载路径
app.set('views',__dirname+'/views');
//设置视图模板的引擎
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/static'));
require('./config/configRouter.js')(app);
app.listen(8888);