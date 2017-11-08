const express=require('express');
const http=require('http');
const fs=require('fs');
const socketIo=require('socket.io');
const app=express();
app.use(express.static(__dirname+"/www"));

const server=http.createServer(app).listen(8008);
let arr=[],brr=[];
const io=socketIo.listen(server)
io.on('connection',socket=>{

	socket.on('login',(user,pwd)=>{

		if(arr.indexOf(user)==-1&&brr.indexOf(pwd)==-1){

			socket.emit('loginOk','登录成功');
			socket.userName=user;
			arr.push(user);
			brr.push(pwd);
			io.emit('toCliect','<br/>'+'欢迎'+user+'进入聊天室');
			//socket.broadcast.emit('toCliect','欢迎'+user+'进入聊天室');
			user=user;
		}else{
			io.emit('loginErr','该用户名已登录');
		}
	})
	socket.on('toServer',msg=>{

		io.emit('toCliect',socket.userName+'说:'+msg);
		//socket.broadcast.emit('toCliect',socket.userName+'说:'+msg);
	})
	socket.on('sendImg',data=>{
		io.emit('pic',data,socket.userName);
	})
})
