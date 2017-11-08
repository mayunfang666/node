/*const express=require('express');
const querystring=require('querystring');
const router=express.Router();
const st=require('../config/configMysql.js')();
router.get('/successed',(req,res)=>{
	const obj=querystring.parse(req.url.split("?")[1]);
	st.query('select * from admin ',(err,result)=>{
		res.send(result);
	})
})
module.exports=router;*/
const express=require('express');
const app=express();
const ejs=require("ejs");
const con=require('../config/configMysql.js')();
module.exports=(req,res)=>{

	con.query('select * from admin',(err,result)=>{
		 res.render('success',{
		 	data:result
		 })
	})
}
