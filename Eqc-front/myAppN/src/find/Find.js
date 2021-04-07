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

export default class Find extends Component {
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
        fetch('http://172.21.94.180:3000/tips')
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
        fetch('http://192.168.0.104:3000/merchandise')
            .then(res => res.json())
            .then(res => {
                this.setState({ tit: res });
            }, console.log(this.state.tit))
    }
    shoucang = () => {
        if (!this.state.wish) {
            this.refs.changeColor.color = 'red',
                this.setState({
                    // name:'heart',
                    wish: true
                })
        }
        else {
            this.refs.changeColor.color = '#000',
                this.setState({
                    // name:'heart-o',
                    wish: false
                })
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

                
                    <View style={{ height: 300 * s, width: 640 * s, backgroundColor: '#eee' }}>

                        <View style={{ height: 60 * s, width: 640 * s,  backgroundColor: '#fff',marginBottom:'2%',paddingLeft:'40%',justifyContent: 'center',alignItems:'center' }}>
                            <Text style={{width: '100%',height: '80%',color:'#fc9',fontSize:30,}}>发现更多</Text>
                        </View>
                        <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'space-evenly',alignContent:'center'}}>
                        <View style={{
                                    width:'20%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.xinzeng()}>
                                        <View style={styles.img}>
                                            <Icon
                                                name="eye"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text>增企业</Text>
                                    </TouchableOpacity>
                        </View>
                        <View style={{
                                    width:'20%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.bangdan()}>
                                        <View style={styles.img}>
                                            <Icon
                                                name="search"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text>查榜单</Text>
                                    </TouchableOpacity>
                        </View>
                        <View style={{
                                    width: '20%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.project()}>
                                        <View style={styles.img}>
                                        <Icon
                                                name="user"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text >项目产品</Text>
                                    </TouchableOpacity>
                        </View>
                        <View style={{
                                    width: '20%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.touzi()}>
                                        <View style={styles.img}>
                                        <Icon
                                                name="windows"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text >投资机构</Text>
                                    </TouchableOpacity>
                        </View>
                        </View>
                        
                    </View>
                    <ScrollView>
                    <View style={{  justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{
                                    width: '100%',
                                    height: 100 * s,
                                    justifyContent: 'center',
                                    marginTop: 20 * s,
                                    padding: 4,
                                    backgroundColor: '#eee'
                                }}>
                                    
                                    <Text style={{ color:'#fc6',fontSize:20,paddingLeft:'5%'}}>金融小Tips</Text>
                                    
                                </View>
                                {
                            // this.state.tits&&
                            this.state.tits.map((item, key) => (
                                <View style={{
                                    width: '100%',
                                    height: 100 * s,
                                    alignItems: 'center',
                                    marginTop: 20 * s,
                                    padding: 4,
                                    backgroundColor: '#eee'
                                }}>
                                    <TouchableOpacity style={{ width: '90%', height: 90 * s }} >
                                        <Text style={{ marginTop: 15 * s, height: 40 * s,fontSize:25 }} onPress={() => Actions.zixun()}>{item.tipstitle}</Text>
                                
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 30 * s }}>
                                            <Text style={{width:'60%' }}>{item.tipscontent.lenght<=15?item.tipscontent:item.tipscontent.slice(0,15)+'···'}</Text>
                                            <Icon name="star" style={{ color: 'gray', fontSize: 20, paddingRight: '5%' }} onPress={() => Actions.pop()}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                ))
                            }
                            </View>
                    
                </ScrollView>

                
            </View>



        )
    }
}
