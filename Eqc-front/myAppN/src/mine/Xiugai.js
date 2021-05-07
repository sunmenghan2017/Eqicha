import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Xiugai extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            usertel: '',
            zhiwei: '',
            company: '',
            isregister: true,
            isreseting: false,
            data: []
        }
    }
    componentDidMount() {
        fetch('http://192.168.43.36:3000/user')
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
    zhiweihandle = (text) => {
        this.setState({ zhiwei: text })
    }
    companyhandle = (text) => {
        this.setState({ company: text })
    }
    reset = () => {
        if (this.state.username != '' || this.state.usertel != '') {
            this.setState({ reseting: true });

        }
    }

    ok = () => {
        if (this.state.zhiwei != ''||this.state.company != '') {
            var loginname = this.state.username;
            var utel = this.state.usertel;
            for (var i = 0; i < this.state.data.length; i++) {
                if (loginname === this.state.data[i].username || utel === this.state.data[i].usertel) {

                    registerValue = { "userid": this.state.data[i].userid, "userzhiwei": this.state.zhiwei, "companyname": this.state.company }
                    this.setState({ userid: this.state.data[i].userid })
                    fetch('http://192.168.43.36:3000/user2', {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify(registerValue),
                    }).then(res => res.text())
                        .then(data => {
                            console.log(data);
                        });

                    Actions.mine();
                }
            }
        }
    }





    render() {
        return (
            <View >
                <View style={{ flexDirection: 'row', height:40, width: '100%',  marginBottom: '15%',backgroundColor:'#ff4500' ,paddingLeft:'5%'}}>
                    <TouchableOpacity onPress={Actions.mine} style={{width:'10%',height:40,}}>
                        <Icon1
                            name="angle-left"
                            style={{ color: '#fff', fontSize: 20, lineHeight:40}}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ alignItems: 'center',  height: '60%' }}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // paddingLeft: 20,
                        }}>

                        <TextInput placeholder="手机号/用户名"
                            onChangeText={this.userhandle}
                            style={{ width: '60%', backgroundColor: '#fff' }}
                        />
                        <TouchableOpacity
                            style={{
                                width: '35%',
                                height: 50,
                                backgroundColor: '#ff4500',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={this.reset}
                        >
                            <Text style={{ color: '#fff' }}>修改信息</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.reseting
                            ? <View
                                style={{
                                    width: '90%', marginTop: 20,height:'50%',
                                    marginRight: 10,
                                    borderBottomColor: '#ccc',
                                    borderBottomWidth: 1,
                                    alignItems: 'center',
                                    // paddingLeft: 20,
                                }}>
                                <TextInput
                                    style={{ width: '90%', backgroundColor: '#fff',marginTop:'3%' }}
                                    onChangeText={this.zhiweihandle}
                                    placeholder="请输入新的职位"
                                />
                                <TextInput
                                    style={{ width: '90%', backgroundColor: '#fff',marginTop:'3%',marginBottom:'5%' }}
                                    onChangeText={this.companyhandle}
                                    placeholder="请输入新公司"
                                />
                                
                                <TouchableOpacity
                                    style={{
                                        width: '35%',
                                        height: 50,
                                        backgroundColor: '#ff4500',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                    }}
                                    onPress={this.ok}
                                >
                                    <Text style={{ color: '#fff',alignItems: 'center',justifyContent:'center',alignContent:'center' }}>确定</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }

                </View>
            </View>
        );
    }
}