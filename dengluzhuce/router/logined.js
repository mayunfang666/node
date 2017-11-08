const express=require('express');
const querystring=require('querystring');
const router=express.Router();
const st=require('../config/configMysql.js')();
router.get('/logined',(req,res)=>{
	const obj=querystring.parse(req.url.split("?")[1]);
	st.query('select * from admin where user=? and uPwd=?',[obj.name,obj.pwd],(err,result)=>{
		if(result.length>0){
			res.send({code:1,msg:'登录成功'});
		}else{
			res.send({code:0,msg:'登录失败'});
		}
	})
})
module.exports=router;