const express=require('express');
const router=express.Router();
const st=require('../config/configMysql.js')();
router.post('/delted',(req,res)=>{
	st.query('delete from admin where id=?',[req.body.id],(err,result)=>{
		if(result){
			res.send({code:1,msg:'删除成功'})
		}else{
			res.send({code:0,msg:'删除失败'})
		}
	})
})
module.exports=router;