import React, { Component } from 'react'
import { Text, View, StyleSheet,} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'

export default class Changjian extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:50,paddingTop:10,width:'100%',borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'32%'}}>常见问题</Text>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>租衣规则</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>还衣规则</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>租赁问题</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>寄租问题</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>商品问题</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>其他问题</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16}}>了解清洗</Text>
                        <Icon name='star' color='black' style={{fontSize:15,paddingLeft:10,paddingTop:3}}/>
                        <Icon name='right' color='black' style={{fontSize:15,paddingLeft:220,paddingTop:2}}/>
                    </View>
                </View>
                <View style={{height:180,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:25}}>联系我们</Text>
                    <Text style={{paddingTop:10}}>111-1111-1111</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:50,
        paddingLeft:20,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#bbb'
    }
})
