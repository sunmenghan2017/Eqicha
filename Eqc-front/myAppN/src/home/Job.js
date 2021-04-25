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

export default class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:'heart-o',
            // color:'',
            wish: false,
            tits: [],
            page: 1,
            tits: [], data: '',
            // user:this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.userid)
        fetch('http://192.168.43.36:3000/zhiwei')
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
                            <Text style={{width: '65%',height: '80%',color:'#fc9',fontSize:20,}}>找工作</Text>
                            <TouchableOpacity style={{ width: '18%', height: '80%' }} onPress={Actions.fabu}>
                            <Text style={{width: '100%',height: '80%',color:'#fff',fontSize:20,backgroundColor:'#fc9',marginLeft:'-15%'}}>招聘发布</Text>
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
                    <ScrollView>
                        

                        
                        {
                            // this.state.tits&&
                            this.state.tits.map((item, key) => (
                                <View style={{
                                    width: '100%',
                                    height: 150 * s,
                                    alignItems: 'center',
                                    marginTop: 20 * s,
                                    padding: 4,
                                    backgroundColor: '#eee'
                                }}>
                                    <TouchableOpacity style={{ width: '90%', height: '90%' }}>
                                        <Text style={{ marginTop: 15 * s, height: '50%', fontSize: 25 }}>{item.zhiwei}</Text>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '40%' }}>

                                            <Text style={{ marginTop: 5 * s, width: '30%' }}>{item.companyname}</Text>
                                            <Text style={{ color: 'red', width: '30%' }}>{item.salary}</Text><Text style={{ marginTop: 5 * s, width: '30%' }}>负责人：李四</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                ))
                            }    
                            {/* <TouchableOpacity style={{ width: '90%', height: '35%' }}>
                                <Text style={{ marginTop: 15 * s, height: '50%', fontSize: 25 }}>运维</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '40%' }}>

                                    <Text style={{ marginTop: 5 * s, width: '30%' }}>360</Text>
                                    <Text style={{ color: 'red', width: '30%' }}>3000-5000</Text><Text style={{ marginTop: 5 * s, width: '30%' }}>负责人：李四</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '90%', height: '35%' }}>
                                <Text style={{ marginTop: 15 * s, height: '50%', fontSize: 25 }}>行政</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '40%' }}>

                                    <Text style={{ marginTop: 5 * s, width: '30%' }}>和简欧集团</Text>
                                    <Text style={{ color: 'red', width: '30%' }}>3000-4500</Text><Text style={{ marginTop: 5 * s, width: '30%' }}>负责人：王五</Text>
                                </View>
                            </TouchableOpacity> */}
                    </ScrollView>

                
            </View>



        )
    }
}
