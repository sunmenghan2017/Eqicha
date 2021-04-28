import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'

export default class Shezhi extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:50,paddingTop:10,width:'100%',borderBottomWidth:1,borderBottomColor:'#bbb',backgroundColor:'#fc9',marginBottom:'10%'}}>
                    <Icon name='left' color='#eee' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'40%'}}>设置</Text>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>简介</Text>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>法律声明及隐私权政策</Text>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>版本更新</Text>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>清除缓存</Text>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>用户帮助</Text>
                </View>
                <View style={{marginTop:130,height:20,width:'50%',marginLeft:'25%'}}>
                    <Button onPress={()=>{AsyncStorage.removeItem('user');Actions.login()}} title="退出登录" color='#fc9'></Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:60,
        paddingLeft:'10%',
        justifyContent:'center'
    }
})
