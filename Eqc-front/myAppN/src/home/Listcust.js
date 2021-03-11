import React, { Component } from 'react';
import {
    TextInput, TouchableOpacity, StatusBar,
    View, Text, Image,
    FlatList, Dimensions, ScrollView, StyleSheet
} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window')
const s = width / 640;

const styles = StyleSheet.create({
    btn: {
        width: 170 * s,
        height: 160 * s,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        // marginTop: 10 * s,
        // padding:'5%'
    },
    img: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 * s,
    },
    slide: {
        // flex:1,
        width: 640 * s,
        // height: 280,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rbtn: {
        color: 'gray',
        fontSize: 20
    }
})

export default class Listcust extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
    }
    

    render() {
        //         console.log('home')
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#fff'
            }}>

                
                   
                    <ScrollView>
                        
                        <TouchableOpacity style={{ width: '100%', height: '10%',marginTop:'5%' }}>
                            <Icon name='left' color='#fc9' style={{paddingLeft:10}} onPress={Actions.pop}/>
                        </TouchableOpacity>
                        <View style={{
                            width: '100%',
                            height: 300 * s,
                            alignItems: 'center',
                            marginTop: 20 * s,
                            padding: 4,
                            backgroundColor: '#eee'
                        }}>
                            
                            <TouchableOpacity style={{ width: '90%', height: '25%' }}>
                                <Text style={{ marginTop: 15 * s, height: '50%', fontSize: 25 }}>公司名</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '40%' }}>

                                    <Text style={{ marginTop: 5 * s, width: '30%' }}>经营人</Text>
                                    <Text style={{ color: 'red', width: '30%' }}>简介</Text><Text style={{ marginTop: 5 * s, width: '30%' }}>时间</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '90%', height: '25%' }}>
                                <Text style={{ marginTop: 15 * s, height: '50%', fontSize: 25 }}>title</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '40%' }}>

                                    <Text style={{ marginTop: 5 * s, width: '30%' }}>来源</Text>
                                    <Text style={{ color: 'red', width: '30%' }}>阅读量</Text><Text style={{ marginTop: 5 * s, width: '30%' }}>时间</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                
            </View>



        )
    }
}
