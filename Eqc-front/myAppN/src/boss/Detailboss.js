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

export default class Detailboss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:'heart-o',
            // color:'',
            wish: false,
            tits: [],
            page: 1,
            tit: [], data: '',
            userid: this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.userid)
        fetch('http://192.168.43.36:3000/person')
            .then(res => res.json())
            .then(res => {
                for (var i = 0; i < res.length; i++) {
                    if (this.props.personid == res[i].personid) {
                        this.setState({
                            data: res[i],
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
                backgroundColor: '#fff'
            }}>



                <View style={{ height: 60 * s, width: 640 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
                    <TouchableOpacity style={{ width: '40%', height: '100%' }}>
                        <Icon
                            name="left"
                            style={{
                                color: '#ff4500', paddingLeft: '10%', paddingTop: '5%', fontSize: 20
                            }}
                            onPress={Actions.pop}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, color: '#ff4500' }}>{this.state.data.personname != null ? this.state.data.personname : '张一鸣'}</Text>

                </View>
                <View style={{ width: '100%', height: 280*s, backgroundColor: '#fc9', paddingTop: '10%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <View style={{ width: '40%', height: 280*s, alignItems: 'center', paddingTop: '5%' }}>
                        <Image style={{ width: '60%', height: 200 * s }} resizeMode='stretch' source={require('../../assets/icon/1.jpg')} />
                    </View>
                    <View style={{ width: '70%', justifyContent: 'center',  alignContent: 'center', }}>
                        <Text style={{ lineHeight: 40, }}>职位：{this.state.data.zhiwei!=null?this.state.data.zhiwei:'创始人、CEO'}</Text>
                        <Text style={{ lineHeight: 40, }}>就职公司：{this.state.data.companyname!=null?this.state.data.companyname:'北京字节跳动科技有限公司'}</Text>
                    </View>

                </View>
                <View style={{ width: '100%', height: 900, alignItems: 'center', backgroundColor: '#fc9' }}>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignContent: 'center', }}>

                        <Text style={{ lineHeight: 40, }}>人物简介：{this.state.data.personintro!=null?this.state.data.personintro:'张一鸣，男，1983年出生于福建省龙岩市永定区，客家人[1-2]，南开大学毕业，北京字节跳动科技有限公司创始人、CEO，今日头条创始人、原CEO。'}</Text>
                    </View>
                </View>

            </View>



        )
    }
}
