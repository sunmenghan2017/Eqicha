import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Xianzhi extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%'}}>
                    <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'30%'}}>我的闲置</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={styles.view}>
                        <Text style={{}}>全部</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={{}}>审核</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={{}}>定价</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={{}}>结算</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:50,
        width:'20%',
        marginLeft:15,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20
    }
})