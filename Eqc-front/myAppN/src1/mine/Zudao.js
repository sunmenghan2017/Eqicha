import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Zudao extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%'}}>
                    <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'30%'}}>我租到的</Text>
                </View>
                
            </View>
        )
    }
}
