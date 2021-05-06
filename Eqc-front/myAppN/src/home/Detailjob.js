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

export default class Detailjob extends Component {
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
        fetch('http://192.168.43.36:3000/zhaopin')
            .then(res => res.json())
            .then(res => {
                for(var i=0;i<res.length;i++){
                    if(this.props.zhaopinid==res[i].zhaopinid){
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
                    <TouchableOpacity style={{ width: '15%', height: '80%' }}>
                        <Icon
                            name="left"
                            style={{
                                color: '#ff4500', padding: '10%', fontSize: 20
                            }}
                            onPress={Actions.pop}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:30,color:'#ff4500'}}>{this.state.data.zhiwei!=null?this.state.data.zhiwei:'英语讲师'}</Text>

                </View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    style={{ width: 640 * s }}
                >

                    <View style={{ height: 365 * s, width: 640 * s }}>
                        <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../assets/zixun.png')} />
                    </View>
                    <View style={{ height: 365 * s, width: 640 * s }}>
                        <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../assets/raw_1528737129.png')} />
                    </View>
                    <View style={{ height: 365 * s, width: 640 * s }}>
                        <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={require('../../assets/zixun.png')} />
                    </View>

                </ScrollView>
                <ScrollView style={{ backgroundColor: '#fc9', width: 640 * s, height: 840 * s  }}>


                    <View style={{ width: 540 * s, height:200, alignItems: 'center', alignContent: 'center', marginLeft: '10%',marginTop:'5%'}}>
                        <Text style={{  width: '100%' ,lineHeight:40,}}>公司团队：{this.state.data.companyname!=null?this.state.data.companyname:'猿辅导'}</Text>
                        <Text style={{ color: 'red',textDecorationLine:'underline', width: '100%' ,lineHeight:40}}>薪资：{this.state.data.salary!=null?this.state.data.salary:'4000-5000'}</Text>
                        <Text style={{ marginTop: 5 * s, width: '100%' ,lineHeight:40}}>岗位要求：{this.state.data.yaoqiu!=null?this.state.data.yaoqiu:'英语好责任心强本科 联系电话：11111'}</Text>
                        <Text style={{  width: '100%',lineHeight:40 }}>工作地点：{this.state.data.zhaopinpos!=null?this.state.data.zhaopinpos:'北京'}</Text>
                        <Text style={{ marginTop: 5 * s, width: '100%' ,lineHeight:40}}>联系电话：{this.state.data.zhaopintel!=null?this.state.data.zhaopintel:'11111'}</Text>
                    </View>
                </ScrollView>


            </View>



        )
    }
}
