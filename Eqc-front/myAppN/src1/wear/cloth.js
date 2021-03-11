import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
// import { Icon } from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;


export default class cloth extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                 <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Icon name='leftcircleo' style={{fontSize:36*s,marginLeft:10*s,marginTop:20*s}}/>
                    </TouchableOpacity>
                <Image source={require('../../assets/wish1.jpg')} style={{width:350,height:400,marginLeft:10*s}}/>
                <Text style={{color:'red',fontSize:12,marginTop:10}}>￥399</Text>
                <Text style={{marginLeft:130}}>连衣裙</Text>
                <Text style={{marginLeft:270,color:'gray',fontSize:10,marginBottom:30}} onPress={Actions.sizedetail}>尺码详情</Text>
                <Button title='租这件'/>
            </View>
        )
    }
}


