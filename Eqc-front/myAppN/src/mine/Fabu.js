import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'

var code = '获取验证码';
export default class Fabu extends Component {
	constructor() {
		super();
		this.state = {
            userid: '',
            usertel: '',
			zhiwei: '',
			yaoqiu: '',
            company: '',
            xinzi: '',
			tips: '',
			data: []
		}
	}
	// componentDidMount() {
    //     //查找招聘信息
	// 	fetch('http://192.168.10.5:3000/user')
	// 		.then(res => res.json())
	// 		.then(res => {
	// 			for(var i =0;i<res.length;i++){
    //                 if(res[i].isloading==1){
    //                     this.setState({
    //                         userID:res[i].userid,
    //                         data:res[i],
    //                     })
    //                 }
    //             }
    //             console.log("userid:"+this.state.userID); 
	// 		})
	// }
	zhiweihandle = (text) => {
		this.setState({ zhiwei: text })
	}
	companyhandle = (text) => {
		this.setState({ company: text })
	}
	yaoqiuhandle = (text) => {
		this.setState({ yaoqiu: text })
	}
	xinzihandle = (text) => {
		this.setState({ xinzi: text })
	}
    telhandle = (text) => {
		this.setState({ usertel: text })
	}
	// fabu = () => {
	// 	const registerValue = { "userid": this.state.userid, "usertel": this.state.usertel, "zhiwei": this.state.zhiwei,"xinzi": this.state.xinzi,"company": this.state.company,"yaoqiu": this.state.yaoqiu, }

	// 	if (this.state.username != "" && this.state.usertel != "" && this.state.zhiwei != "") {
	// 		fetch('http://192.168.10.5:3000/user1', {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-type": "application/json;charset=utf-8",
	// 			},
	// 			body: JSON.stringify(registerValue),
	// 		})
	// 			.then(res => res.text())
	// 			.then(data => {
	// 				console.log(data);
	// 				this.setState({ isregister:true})	
					
	// 				Actions.pop();					
				
	// 			});
	// 	}

	// }
	

	render() {
		return (
			<View>
				<View style={{ flexDirection: 'row', height: '10%', width: '90%', marginTop: '5%', marginBottom: '15%' }}>
					<TouchableOpacity onPress={() => Actions.mine()} style={{ flexDirection: 'row', left: '5%' }} >
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
						<TextInput placeholder="职位"
							onChangeText={this.zhiweihandle}
						/>
                        <TextInput placeholder="薪资"
							onChangeText={this.xinzihandle}
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
							onChangeText={this.companyhandle}
							placeholder="公司"
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
							onChangeText={this.yaoqiuhandle}
							placeholder="要求"
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
						<TextInput placeholder="负责人手机号"
							onChangeText={this.telhandle}
						/>
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
						onPress={this.fabu}>
						<Text>发布</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}