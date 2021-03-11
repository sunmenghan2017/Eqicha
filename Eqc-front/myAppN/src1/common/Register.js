import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
// var code='PCAE';
// constructor(){
// 	super();
// 	this.state={
// 		userName:"",
// 		userTel:"",
// 		userPassword:""
// 	}
// }
// nameChange=(e)=>{
// 	console.log(e.target.value);
// 	this.setState({
// 		userName:e.target.value
// 	})
// }
// telChange=(e)=>{
// 	console.log(e.target.value);
// 	this.setState({
// 		userTel:e.target.value
// 	})
// }
// pwdChange=(e)=>{
// 	console.log(e.target.value);
// 	this.setState({
// 		userPassword:e.target.value
// 	})
// }
// register=()=>{
// 	console.log(this.state.userName);
// 	const registerValue = {"userName":this.state.userName,"userTel": this.state.userTel,"userPassword": this.state.userPassword}

// 	if(this.state.userName!=""&&this.state.userTel!=""&&this.state.userPassword!=""){
// 		fetch('/userinfo1', {
// 			 method: "POST",
// 			 headers: {
// 				 "Content-type":"application/json;charset=utf-8",
// 			 },
// 			 body:JSON.stringify(registerValue) ,
// 		})
// 		.then( res => res.text())
// 		.then( data => {
// 			  console.log(data);
// 			//   if(data.success){
// 			//       alert('register OK');
// 			//   }
// 		});
// 	}

//  }

// //  /* 随机验证码 */
// //  //声明一个变量用于存储生成的验证码

//  changeImg=()=>{
// 	 //alert("换图片");
// 	 var arrays=new Array(
// 		 '1','2','3','4','5','6','7','8','9','0',
// 		 'a','b','c','d','e','f','g','h','i','j',
// 		 'k','l','m','n','o','p','q','r','s','t',
// 		 'u','v','w','x','y','z',
// 		 'A','B','C','D','E','F','G','H','I','J',
// 		 'K','L','M','N','O','P','Q','R','S','T',
// 		 'U','V','W','X','Y','Z'				
// 	 );
// 	 code='';//重新初始化验证码
// 	 //alert(arrays.length);
// 	 //随机从数组中获取四个元素组成验证码
// 	 for(var i=0;i<4;i++){
// 	 //随机获取一个数组的下标
// 		 var r=parseInt(Math.random()*arrays.length);
// 		 code+=arrays[r];
// 		 //alert(arrays[r]);
// 	 }
// 	 //alert(code);
// 	 this.setState({yzm:code});//将验证码写入指定区域
//  }		

//  //效验验证码(表单被提交时触发)
//  check=()=>{
// 	 //获取用户输入的验证码
// 	 var input_code=document.getElementById('vcode').value;
// 	 //alert(input_code+"----"+code);
// 	 if(input_code.toLowerCase()==code.toLowerCase())
// 	 {
// 		 //验证码正确(表单提交)
// 		 this.register();
// 		 window.location='/login';
// 		 return true;
// 	 }
// 	 alert("请输入正确的验证码!");

// 	 //验证码不正确,表单不允许提交
// 	 return false;
//  }

var code = '获取验证码';
export default class Register extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			usertel: '',
			pwd: '',
			yzpwd: '',
			isregister: false,
			tips: '',
			yzm: code,
			data: []
		}
	}
	componentDidMount() {
		fetch('http://192.168.43.245:3000/user')
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
			})
	}
	userhandle = (text) => {
		this.setState({ username: text })
	}
	telhandle = (text) => {
		this.setState({ usertel: text })
	}
	pwdhandle = (text) => {
		this.setState({ pwd: text })
	}
	yzpwdhandle = (text) => {
		this.setState({ yzpwd: text })
	}
	register = () => {
		console.log(this.state.username);
		const registerValue = { "username": this.state.username, "usertel": this.state.usertel, "userpwd": this.state.pwd }

		if (this.state.username != "" && this.state.usertel != "" && this.state.userpwd != "") {
			fetch('http://192.168.43.245:3000/user1', {
				method: "POST",
				headers: {
					"Content-type": "application/json;charset=utf-8",
				},
				body: JSON.stringify(registerValue),
			})
				.then(res => res.text())
				.then(data => {
					console.log(data);
					this.setState({ isregister:true})
					alert('register OK');
						
					AsyncStorage.setItem('user', JSON.stringify(this.state.data))
						.then(() => {
							this.setState({ isregister:false,isloading: false })
							Actions.login();
						})
				
				});
		}

	}
	// register = () => {
	// 	if (
	// 		this.state.username != '' &&
	// 		this.state.pwd != '' &&
	// 		this.state.usertel != '' &&
	// 		this.state.yzpwd != ''
	// 	) {
	// 		myFetch.post('/register', {
	// 			username: this.state.username,
	// 			usertel: this.state.usertel,
	// 			pwd: this.state.pwd
	// 		}).then(res => {
	// 			if (res)
	// 				Actions.login();
	// 			else
	// 				this.setState({ tips: '该用户名已注册，注册失败' })
	// 		})
	// 	} else {
	// 		this.setState({ tips: '确认密码不正确 或 注册信息未填写！' })
	// 	}
	// 	// this.setState({ isRegister: true })
	// 	// myFetch.post('/register',
	// 	// 	{
	// 	// 		username: this.state.username,
	// 	// 		usertel:this.state.usertel,
	// 	// 		pwd: this.state.pwd
	// 	// 	}).then(res => {
	// 	// 		AsyncStorage.setItem('user', JSON.stringify(res.data))
	// 	// 			.then(() => {
	// 	// 				ToastAndroid.show('注册成功', 1000);
	// 	// 				setTimeout(() => Actions.login(), 2000)
	// 	// 			})
	// 	// 	})
	// }
	/* 随机验证码 */
	//声明一个变量用于存储生成的验证码

	changeImg = () => {
		//alert("换图片");
		var arrays = new Array(
			'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
			'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
			'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
			'U', 'V', 'W', 'X', 'Y', 'Z'
		);
		code = '';//重新初始化验证码
		//alert(arrays.length);
		//随机从数组中获取四个元素组成验证码
		for (var i = 0; i < 4; i++) {
			//随机获取一个数组的下标
			var r = parseInt(Math.random() * arrays.length);
			code += arrays[r];
			//alert(arrays[r]);
		}
		//alert(code);
		this.setState({ yzm: code });//将验证码写入指定区域
	}


	render() {
		return (
			<View>
				<View style={{ flexDirection: 'row', height: '10%', width: '90%', marginTop: '5%', marginBottom: '15%' }}>
					<TouchableOpacity onPress={() => Actions.login()} style={{ flexDirection: 'row', left: '5%' }} >
						<Icon1
							name="angle-left"
							style={{ color: 'gray', fontSize: 20, paddingRight: '5%' }}
						/>
						<Text style={{ fontSize: 16, color: "blue" }}>返回</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{ alignItems: 'center', justifyContent: 'center', height: '40%' }}>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>

						<Icon1 name="user" color="red" />
						<TextInput placeholder="用户名"
							onChangeText={this.userhandle}
						/>
					</View>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>
						<Icon1 name="keyboard-o" color="red" />
						<TextInput
							onChangeText={this.pwdhandle}
							placeholder="密码"
							secureTextEntry={true}
						/>
					</View>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>

						<Icon1 name="user" color="red" />
						<TextInput placeholder="手机号"
							onChangeText={this.telhandle}
						/>
					</View>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>
						<Icon1 name="keyboard-o" color="red" />
						<TextInput
							onChangeText={this.yzpwdhandle}
							id="vcode" placeholder="验证码"
							style={{ width: '50%' }}
						/>
						<TouchableOpacity
							id="vvcode" title="看不清，换一张"
							style={{
								width: '40%',
								height: 40,
								backgroundColor: '#ccc',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							onPress={this.changeImg}>
							<Text id="code" title="看不清，换一张">{this.state.yzm}</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={{
							width: '80%',
							height: 40,
							backgroundColor: '#ccc',
							marginTop: 30,
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onPress={this.register}>
						<Text>注册</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}


