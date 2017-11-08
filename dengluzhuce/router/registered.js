const st=require('../config/configMysql.js')();
module.exports=(req,res)=>{

	st.query('select * from admin where user=? and uPwd=?',[req.body.name,req.body.pwd],(err,result)=>{
		if(result.length>0){
			res.send({code:0,msg:'该用户名已被占用，请重新注册'});
		}else{

			st.query('insert into admin(user,uPwd) values("'+req.body.name+'","'+req.body.pwd+'")',(err,result)=>{
				//判断结果集
				if(result){
					res.send({code:1,msg:'注册成功,请登录'});
				}else{
					res.send({code:0,msg:'注册失败'});
				}
			})
		}
	})




}