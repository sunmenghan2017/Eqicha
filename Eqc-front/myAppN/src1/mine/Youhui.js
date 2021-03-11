import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Youhui extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%'}}>
                    <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'30%'}}>我的优惠券</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={styles.view}>
                        <Text style={{}}>可使用</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={{}}>已使用</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={{}}>已过期</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:50,
        width:'30%',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20
    }
})