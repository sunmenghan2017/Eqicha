import React, { Component } from 'react';
import {
    TextInput, TouchableOpacity, StatusBar,
    View, Text, Image,
    FlatList, Dimensions, ScrollView, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

export default class Home extends Component {
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
        fetch('http://192.168.0.105:3000/news')
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
    // componentDidUpdate(){
    //     fetch('http://192.168.0.106:3000/user')
    //         .then(res=>res.json())
    //         .then(res=>{
    //             this.setState({tits: res});
    //         })
    // }
    // shoucang = () => {
    //     if (!this.state.wish) {
    //         this.refs.changeColor.color = 'red',
    //             this.setState({
    //                 // name:'heart',
    //                 wish: true
    //             })
    //     }
    //     else {
    //         this.refs.changeColor.color = '#000',
    //             this.setState({
    //                 // name:'heart-o',
    //                 wish: false
    //             })
    //     }
    // }
    render() {
        //         console.log('home')
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#fff'
            }}>

                <ScrollView
                    style={{ height: 250 * s, width: 640 * s }}
                >
                    <View style={{ height: 350 * s, width: 640 * s, backgroundColor: '#fc9' }}>
                        <View style={{ height: 240 * s, width: 640 * s, }}>
                            <View style={{ height: 160 * s, width: 640 * s,marginTop:'10%', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: '#fff', fontSize:40}}>E企查</Text>
                                <Text style={{ color: '#fff', }}>一站式企业信息查询服务平台</Text>
                            </View>
                            <View style={{ height: 80 * s, width: 500 * s,flexDirection:'row', marginLeft:'11%',justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                                <TouchableOpacity style={{width:'15%',height:'80%'}}>
                                    <Icon
                                    name="search"
                                    style={{
                                        color: 'gray',padding:'20%',fontSize:20
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
                    </View>
                    <View style={{width:'100%',height:'40%',flexDirection:'row',justifyContent:'flex-start',alignContent:'center'}}>
                        <View style={{
                                    width:'33%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.job()}>
                                        <View style={styles.img}>
                                            <Icon
                                                name="eye"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color:'#fc9'}}>找工作</Text>
                                    </TouchableOpacity>
                        </View>
                        <View style={{
                                    width: '33%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.customer()}>
                                        <View style={styles.img}>
                                        <Icon
                                                name="user"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color:'#fc9'}}>找客户</Text>
                                    </TouchableOpacity>
                        </View>
                        <View style={{
                                    width: '33%',
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.fuqi()}>
                                        <View style={styles.img}>
                                        <Icon
                                                name="windows"
                                                style={{
                                                    color: '#fc9',fontSize:70
                                                }}
                                            />
                                        </View>
                                        <Text style={{color:'#fc9'}}>附近企业</Text>
                                    </TouchableOpacity>
                        </View>
                        {/* {
                            // this.state.tits&&
                            this.state.tits.map((item, key) => (
                                <View style={{
                                    width: 190 * s,
                                    height: 200 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Actions.listdetail()}>
                                        <Text>{item.saletit}</Text>
                                        <Text style={{ fontSize: 10 }}>{item.saleinfo}</Text>
                                        <View style={styles.img}>
                                            <Image style={{ width: '30%', height: '100%' }} resizeMode='stretch' source={{ uri: 'https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kktg.jpg' }} />
                                            <Image style={{ width: '45%', height: '50%' }} resizeMode='stretch' source={{ uri: 'https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kkvl.jpg' }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))
                        } */}

                    </View> 
                </ScrollView>
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
                                    
                                    <Text style={{ color:'#fc6',fontSize:20,paddingLeft:'5%'}}>商业资讯</Text>
                                    
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
                                    <TouchableOpacity style={{ width: '90%', height: 100*s }} onPress={() => Actions.zixun()}>
                                        <Text style={{ marginTop: 15 * s, height: 40 * s,fontSize:20 }}>{item.newstitle}</Text>
                                
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 25 * s }}>

                                            <Text style={{ marginTop: 5 * s ,width:'60%'}}>{item.companyname}</Text>
                                            <Text style={{ marginTop: 5 * s ,width:'30%'}}>{item.newstime}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                ))
                            }
                            </View>
                             
                    {/* {
                        this.state.tit.map((item, key) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', }}>
                                <View style={{
                                    width: '45%',
                                    height: 500 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 20 * s,
                                    padding: 4,
                                    backgroundColor: '#eee'
                                }}>
                                    <TouchableOpacity style={{ width: '100%', height: '90%' }} onPress={() => Actions.detail({ 'merid': item.merid, 'userid': this.state.user })}>
                                        <Image style={{ width: '100%', height: '90%', borderRadius: 20 }}
                                            resizeMode='stretch'
                                            source={{ uri: `${item.merimg}` }} />
                                        <Text style={{ marginTop: 15 * s }}>{item.tit.slice(8,)}</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '10%' }}>
                                        <Text style={{ marginTop: 5 * s }}>{item.shopbrand}</Text>
                                        <Text style={{ color: 'red', }}>￥{item.price}/4日</Text>
                                    </View>
                                </View>

                                <View style={{
                                    width: '45%',
                                    height: 500 * s,
                                    alignItems: 'center',
                                    marginTop: 20 * s,
                                    padding: 4,
                                    backgroundColor: '#eee'
                                }}>
                                    <TouchableOpacity style={{ width: '100%', height: '90%' }}>
                                        <Image style={{ width: '100%', height: '90%', borderRadius: 20 }} resizeMode='stretch' source={require('../../assets/v2_q5klq0.jpg')} />
                                        <Text style={{ marginTop: 15 * s }}>宝石蓝抹胸晚礼服</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '10%' }}>

                                        <Text style={{ marginTop: 5 * s }}>BLANCHE</Text>
                                        <Text style={{ color: 'red' }}>￥399/4日</Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    } */}
                </ScrollView>
            </View>



        )
    }
}
