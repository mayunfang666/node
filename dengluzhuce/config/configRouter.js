const delted=require('../router/delted.js');
const login=require('../router/login.js');
const logined=require('../router/logined.js');
const register=require('../router/register.js');
const registered=require('../router/registered.js');
const successed=require('../router/successed.js');
const updated=require('../router/updated.js');
module.exports=function(app){
	app.post('/delted',delted);
	app.get('/login',login);
	app.get('/logined',logined);
	app.get('/register',register);
	app.post('/registered',registered);
	app.get('/successed',successed);
	app.post('/updated',updated);
}