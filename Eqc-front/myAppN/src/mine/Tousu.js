import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Tousu extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%',backgroundColor:'#ff4500'}}>
                    <Icon name='left' color='#fff' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{color:'#fff',fontSize:18,paddingLeft:'30%'}}>我的消息</Text>
                </View>
                <View style={{height:'70%',width:'80%',borderWidth:1,borderColor:'#ccc',backgroundColor:'#fff',marginLeft:'10%',marginTop:'10%',alignItems:'center',justifyContent:"center"}}>
                    <Text style={{color:'#eee'}}>请留下您的建议。</Text>
                </View>
                <View style={{marginTop:30,height:20,width:'50%',marginLeft:120}}>
                    <Button title="提交反馈" color='#ff4500'></Button>
                </View>
            </View>
        )
    }
}
