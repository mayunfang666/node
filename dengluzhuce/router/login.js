const path=require('path');
module.exports=(req,res)=>{
	res.render('login');
	//res.sendFile(path.join(__dirname,"..",'/static/login.html'));
}