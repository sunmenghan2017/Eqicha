import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,Button,AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'


export default class Lianxi extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:50,paddingTop:10,width:'100%',borderBottomWidth:1,borderBottomColor:'#bbb',backgroundColor:'#ff4500'}}>
                    <Icon name='left' color='#fff' style={{paddingLeft:10}} onPress={Actions.mine}/>
                    <Text style={{color:'#fff',fontSize:18,paddingLeft:'32%'}}>联系我们</Text>
                </View>
                <View style={{height:250,width:'100%',justifyContent:'center',alignContent:'center',paddingLeft:'36%',borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Image style={styles.img} source={require('../../assets/logo.jpg')}/>
                    <Text style={{fontSize:18,paddingLeft:'12%',color:'#ff4500'}}>E企查</Text>
                </View>
                <View style={{height:100,marginTop:'20%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:16,color:'#ff4500'}}>客服电话：7788321</Text>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16,color:'#ff4500'}}>客服邮箱：123456789@126com</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:100,
        paddingLeft:'28%',
        justifyContent:'center'
    },
    img: {
        width: '40%',
        height: '65%'
    }
})
