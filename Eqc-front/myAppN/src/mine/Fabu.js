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
            zhaopintel: '',
			zhiwei: '',
			yaoqiu: '',
            companyname: '',
            salary: '',
			tips: '',
			data: []
		}
	}
	componentDidMount() {
        //查找招聘信息
		fetch('http://192.168.43.36:3000/user')
			.then(res => res.json())
			.then(res => {
				for(var i =0;i<res.length;i++){
                    if(res[i].isloading==1){
                        this.setState({
                            userid:res[i].userid,
                            data:res[i],
                        })
                    }
                }
                console.log("userid:"+this.state.userid); 
			})
		// fetch('http://192.168.43.36:3000/user')
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		for(var i =0;i<res.length;i++){
        //             if(res[i].isloading==1){
        //                 this.setState({
        //                     userid:res[i].userid,
        //                     data:res[i],
        //                 })
        //             }
        //         }
        //         console.log("userid:"+this.state.userID); 
		// 	})

	}
	zhiweihandle = (text) => {
		this.setState({ zhiwei: text })
	}
	companynamehandle = (text) => {
		this.setState({ companyname: text })
	}
	yaoqiuhandle = (text) => {
		this.setState({ yaoqiu: text })
	}
	salaryhandle = (text) => {
		this.setState({ salary: text })
	}
    zhaopintelhandle = (text) => {
		this.setState({ zhaopintel: text })
	}
	fabu = () => {
		const registerValue = { "userid": this.state.userid, "zhapointel": this.state.zhaopintel, "zhiwei": this.state.zhiwei,"salary": this.state.salary,"companyname": this.state.companyname,"yaoqiu": this.state.yaoqiu, }

		if (this.state.zhaopintel != "" && this.state.zhiwei != "") {
			fetch('http://192.168.43.36:3000/addzhiwei', {
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
					
					Actions.job();					
				
				});
		}

	}
	

	render() {
		return (
			<View style={{width:'100%'}}>
				<View style={{ flexDirection: 'row', height: 50, width: '100%',  marginBottom: '25%' ,backgroundColor:'#fc9'}}>
					<TouchableOpacity style={{ flexDirection: 'row', left: '5%' }} >
						<Icon1
							name="angle-left"
							style={{ color: '#eee', fontSize: 20, paddingRight: '5%',lineHeight:50 ,}}  onPress={Actions.pop}
						/>
						
					</TouchableOpacity>
				</View>
				<View
					style={{ alignItems: 'center',  height: '40%' }}>
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
							onChangeText={this.salaryhandle}
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
							onChangeText={this.companynamehandle}
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
							paddingLeft: 20,marginBottom: '10%'
						}}>

						<Icon1 name="user" color="red" />
						<TextInput placeholder="负责人手机号"
							onChangeText={this.zhaopintelhandle}
						/>
					</View>
					
					<TouchableOpacity
						style={{
							width: '80%',
							height: 40,
							backgroundColor: '#fc9',
							marginTop: 30,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius:5,
						}}
						onPress={this.fabu}>
						<Text style={{color:'#fff'}}>发布</Text>
					</TouchableOpacity>
				</View>
				{/* <View style={{width:'100%',height:200}}></View> */}
			</View>
		);
	}
}