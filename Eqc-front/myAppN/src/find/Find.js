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
        width: 150 * s,
        height: 160 * s,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:10
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
    constructor() {
        super();
        this.state = {
            // name:'heart-o',
            // color:'',
            wish: false,
            tits: [],
            page: 1,
            tit: [], 
            tipsId: [],
            data: [],
            userid: '',
            list: [],
        }
    }
    componentDidMount() {
        // console.log(this.props.userid)
        fetch("http://192.168.43.36:3000/user")
            .then(res => res.json())
            .then(res => {
                for (var i = 0; i < res.length; i++) {
                    if (res[i].isloading == 1) {
                        this.setState({
                            userid: res[i].userid,
                        })
                    }
                }
                // console.log("userid:"+this.state.userid);
            })
        fetch("http://192.168.43.36:3000/collect")
            .then(res => res.json())
            .then(res => {
                for (var i = 0; i < res.length; i++) {
                    if (res[i].userid == this.state.userid) {
                        console.log("收藏"+res[i])
                        this.setState({
                            data: res,

                            tipsId: [...this.state.tipsId, res[i].tipsid]
                        })
                        console.log("a"+res[i].userid);
                    }

                }
                // console.log('this.state.tipsId:'+this.state.tipsId);
            })
        fetch("http://192.168.43.36:3000/tips")
            .then(res => res.json())
            .then(res => {
                this.setState({ tits: res });
            }, console.log(this.state.tits))
            // .then(res => res.json())
            // .then(res => {
            //     console.log('this.state.tipsId' + this.state.tipsId);
            //     for (var i = 0; i < res.length; i++) {
            //         // console.log(res[i]);
            //         for (var j = 0; j < this.state.tipsId.length; j++) {
            //             // console.log('this.state.tipsId[j]' + this.state.tipsId[j])
            //             // console.log('res[i].tipsid' + res[i].tipsId)
            //             if (res[i].tipsid == this.state.tipsId[j]) {
            //                 this.setState({
            //                     tit: [...this.state.tit, res[i]],

            //                 })
            //             }
            //         }
            //         // this.setState({data:res})
            //         // console.log(this.state.data);
            //     }
            //     console.log("我的"+this.state.tit);
            //     for (var i = 0; i < this.state.tit.length; i++) {
            //         this.setState({
            //             list: [...this.state.list, i]
            //         })
            //     }
            //     console.log("我的="+this.state.list)
            // })
            // // console.log("你进来了");
    }   
    shoucang = () => {
                    if (!this.state.wish) {
                        this.refs.changeColor.color = 'red',
                            this.setState({
                                wish: true
                            })
                    }
                    else {
                        this.refs.changeColor.color = 'gray',
                            this.setState({
                                wish: false
                            })
                    }
                }
    
    render() {
                //         console.log('home')
                return(
            <View style = {{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
            }} >

                
                    <View style={{ height: 300 * s, width: 640 * s, backgroundColor: '#ff4500' }}>

                        <View style={{ height: 60 * s, width: 640 * s,  backgroundColor: '#fff',marginBottom:'2%',paddingLeft:'40%',justifyContent: 'center',alignItems:'center' }}>
                            <Text style={{width: '100%',height: '80%',color:'#ff4500',fontSize:30,}}>发现更多</Text>
                        </View>
                        <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'space-evenly',alignContent:'center'}}>
                        <View style={{
                                    width:'20%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.xinzeng()}>
                                        <View style={styles.img}>
                                            <Icon
                                                name="eye"
                                                style={{
                                                    color: '#ff4500',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color: '#ff4500'}}>增企业</Text>
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
                                                    color: '#ff4500',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color: '#ff4500'}}>查榜单</Text>
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
                                                    color: '#ff4500',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color: '#ff4500'}} >项目产品</Text>
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
                                                    color: '#ff4500',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color: '#ff4500'}} >投资机构</Text>
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
                                    backgroundColor: '#fff'
                                }}>
                                    
                                    <Text style={{ color:'#fc6',fontSize:20,paddingLeft:'5%'}}>金融小Tips</Text>
                                    
                                </View>
                                {/* {
                    this.state.list.map((i) =>(
                        <View>
                            
                            <TouchableOpacity onPress={()=>Actions.zixun({'tipsid':this.state.tipsId[i],'userid':this.state.userid})}>
                                
                                
                                <Text>{this.state.tit[i].tipstitle}</Text>
                           </TouchableOpacity>
                        </View>
                        
                    ))
                } */}
                                {
                            // this.state.tits&&
                            this.state.tits.map((item, key) => (
                                <View style={{
                                    width: '100%',
                                    height: 100 * s,
                                    alignItems: 'center',
                                    marginTop: 20 * s,
                                    padding: 4,
                                    backgroundColor: '#ff4500'
                                }}>
                                    <TouchableOpacity style={{ width: '90%', height: 90 * s }} onPress={()=>Actions.zixun({'tipsid':item.tipsid,'userid':this.state.userid})}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 90 * s }}>
                                            <Text style={{ lineHeight:40, height: 50 * s,fontSize:25,color:'#fff' }} >{item.tipstitle}</Text>
                                            <Text style={{width:'60%',color:'#fff' }}>{item.tipscontent.lenght<=15?item.tipscontent:item.tipscontent.slice(0,15)+'···'}</Text>
                                            
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                ))
                            }
                            </View>
                    
                </ScrollView>

                
            </View >



        )
    }
}
