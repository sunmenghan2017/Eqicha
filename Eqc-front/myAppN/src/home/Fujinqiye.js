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

export default class Fujinqiye extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:'heart-o',
            // color:'',
            wish: false,
            tits: [],
            page: 1,
            tit: [], data: '',
            // user:this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.userid)
        fetch('http://192.168.0.102:3000/sale')
            .then(res => res.json())
            .then(res => {
                // for(var i=0;i<res.length;i++){
                //     if(this.props.saleid==res[i].saleid){
                //         this.setState({
                //             data:res[i],
                //         })
                //     }
                // }
                console.log(res)
                this.setState({ tits: res });
            })
        fetch('http://192.168.0.102:3000/merchandise')
            .then(res => res.json())
            .then(res => {
                this.setState({ tit: res });
            }, console.log(this.state.tit))
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

                
                    <View style={{ height: 150 * s, width: 640 * s, backgroundColor: '#fc9' }}>

                    <View style={{ height: 60 * s, width: 640 * s,  backgroundColor: '#fff',marginBottom:'2%', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', }}>
                            <TouchableOpacity style={{ width: '15%', height: '80%' }}>
                            <Icon name='left' color='#fc9' style={{paddingLeft:10}} onPress={Actions.pop}/>
                            </TouchableOpacity>
                            <Text style={{width: '70%',height: '80%',color:'#fc9',fontSize:20}}>附近企业</Text>
                            <TouchableOpacity style={{ width: '15%', height: '80%' }}>
                            <Icon name='windows' color='#fc9' style={{paddingLeft:'50%'}}  onPress={Actions.pop}/>
                            </TouchableOpacity>
                        </View>

                    
                        <View style={{ height: 60 * s, width: 500 * s, flexDirection: 'row', marginLeft: '11%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                            <TouchableOpacity style={{ width: '15%', height: '80%' }}>
                                <Icon1
                                    name="search"
                                    style={{
                                        color: 'gray', padding: '20%', fontSize: 20
                                    }}
                                />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="请输入搜索名称"
                                style={{
                                    width: '85%',
                                    height: '100%'
                                }}
                            />
                        </View>

                    </View>
                    <ScrollView style={{backgroundColor: '#eee'}}>
                        

                        <View style={{
                            width: '100%',
                            height: 600 * s,
                            alignItems: 'center',
                            marginTop: 20 * s,
                            padding: 4,
                        }}>
                            <View style={{width: '90%', height: '30%', backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <TouchableOpacity style={{ width: '30%',  }}>
                            <Image style={{ width: '90%', height: '90%' }} resizeMode='contain' source={{ uri: 'https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kktg.jpg' }}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '70%', }}>
                                <Text style={{ marginTop: 15 * s, height: '50%', fontSize: 25 }}>公司名</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '40%' }}>

                                    <Text style={{ marginTop: 5 * s, width: '30%' }}>位置</Text>
                                    <Text style={{ color: 'red', width: '30%' }}>经营者</Text><Text style={{ marginTop: 5 * s, width: '30%' }}>类别</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
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
