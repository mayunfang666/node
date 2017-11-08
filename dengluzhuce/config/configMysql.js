//连接数据库
const mysql=require('mysql');
module.exports=function(){

	const st=mysql.createConnection({
		host:'localhost',
		port:3306,
		user:"root",
		password:'fang',
		database:'cms',
		insecureAuth:true
	})
	st.connect(err=>{
		if(err) throw err;
	})
	return st;
}