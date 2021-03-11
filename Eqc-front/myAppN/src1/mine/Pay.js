import React, { Component } from 'react'
import { Text, View, StyleSheet,} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'

export default class Pay extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:50,paddingTop:10,width:'100%',borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'32%'}}>我的钱包</Text>
                </View>
                <View style={{height:200,width:'100%',alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Text style={{fontSize:20}}>账户余额</Text>
                    <View style={{flexDirection:'row',marginTop:30}}>
                        <Icon name='dollar' color='black' style={{fontSize:30}}/>
                        <Text style={{paddingLeft:10,fontSize:25}}>0.00</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:60}}>
                        <Text>资金明细</Text>
                        <Icon name='right' color='black' style={{paddingLeft:10,fontSize:15,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>押金</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Icon name='dollar' color='black' style={{fontSize:20}}/>
                        <Text style={{paddingLeft:10}}>0.00</Text>
                        <Text style={{paddingLeft:200}}>退还</Text>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:5,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>礼服押金</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Icon name='dollar' color='black' style={{fontSize:20}}/>
                        <Text style={{paddingLeft:10}}>0.00</Text>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:233,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:16}}>赔付项</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Icon name='dollar' color='black' style={{fontSize:20}}/>
                        <Text style={{paddingLeft:10}}>0.00</Text>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:233,paddingTop:2}}/>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:80,
        paddingLeft:20,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#bbb'
    }
})
