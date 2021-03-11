import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Forget extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            usertel: '',
            pwd: '',
            isregister: true,
            isreseting: false,
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
    reset = () => {
        if (this.state.username != '' || this.state.usertel != '') {
            this.setState({ reseting: true });
            
        }
    }
    
ok = () => {
    if (this.state.pwd != '') {
        var loginname = this.state.username;
        var utel = this.state.usertel;
            for (var i = 0; i < this.state.data.length; i++) {
                if (loginname === this.state.data[i].username || utel === this.state.data[i].usertel) {
                    // this.setState({isloading:this.state.data[i].isloading })
                    registerValue = { "userid": this.state.data[i].userid, "userpwd": this.state.pwd }
                    this.setState({ userid: this.state.data[i].userid })
                    // fetch('http://192.168.0.106:3000/denglu', {
                    fetch('http://192.168.43.245:3000/user3', {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify(registerValue),
                    }).then(res => res.text())
                        .then(data => {
                            console.log(data);
                        });
                    
                    Actions.login();
                }
            }
    }
}





render() {
    return (
        <View style={{ backgroundColor: '#eee' }}>
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
                            backgroundColor: '#ccc',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                        onPress={this.reset}
                    >
                        <Text style={{ color: '#fff' }}>忘记密码</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.reseting
                        ? <View
                            style={{
                                width: '80%', marginTop: 20,
                                marginRight: 10,
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                // paddingLeft: 20,
                            }}>
                            <TextInput
                                style={{ width: '60%', backgroundColor: '#fff' }}
                                onChangeText={this.pwdhandle}
                                placeholder="请输入新的密码"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                style={{
                                    width: '35%',
                                    height: 50,
                                    backgroundColor: '#ccc',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10
                                }}
                                onPress={this.ok}
                            >
                                <Text style={{ color: '#fff' }}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                }

            </View>
        </View>
    );
}
}


