const path=require('path');
module.exports=(req,res)=>{
	res.render('register');
	//res.sendFile(path.join(__dirname,"..",'/static/register.html'));
}