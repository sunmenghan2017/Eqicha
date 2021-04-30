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

export default class Detailbangdan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:'heart-o',
            // color:'',
            wish: false,
            tits: [],
            page: 1,
            tit: [], data: '',
            userid:this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.userid)
        fetch('http://192.168.43.36:3000/bangdan')
            .then(res => res.json())
            .then(res => {
                for(var i=0;i<res.length;i++){
                    if(this.props.bangdanid==res[i].bangdanid){
                        this.setState({
                            data:res[i],
                        })
                    }
                }
            })
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



                <View style={{ height: 60 * s, width: 640 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
                    <TouchableOpacity style={{ width: '13%', height: '80%' }}>
                        <Icon
                            name="left"
                            style={{
                                color: '#ff4500', padding: '10%', fontSize: 20
                            }}
                            onPress={Actions.pop}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:30,color:'#ff4500'}}>{this.state.data.bangdanname}</Text>

                </View>
                <ScrollView style={{ backgroundColor: '#fc9' }}>


                    <View style={{ width: 540 * s, height:200, alignItems: 'center', alignContent: 'center', marginLeft: '10%',marginTop:'5%' }}>
                        <Text style={{  width: '100%' ,lineHeight:40,color:'red',textDecorationLine:'underline'}}>{this.state.data.bangdancontent}</Text>
                        <Text style={{  width: '100%' ,lineHeight:40}}>{this.state.data.bangdanintro}</Text>
                    </View>
                </ScrollView>


            </View>



        )
    }
}
