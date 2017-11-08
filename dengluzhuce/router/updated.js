const express=require('express');
const router=express.Router();
const st=require('../config/configMysql.js')();
router.post('/updated',(req,res)=>{
	st.query('update admin set user=?,uPwd=? where id=?',[req.body.user,req.body.pwd,req.body.id],(err,result)=>{
		if(result){
			res.send({code:1,msg:'修改成功'})
		}
	})
})
module.exports=router;
