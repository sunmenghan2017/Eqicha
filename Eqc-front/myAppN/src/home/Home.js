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
        backgroundColor: '#fff',
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
            page: 1, search: '',
            tit: [], data: '',
            // user:this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.userid)
        // fetch('http://192.168.0.105:3000/news')
        fetch('http://192.168.43.36:3000/news')
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
        fetch('http://192.168.43.36:3000/company')
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
                backgroundColor: '#eee'
            }}>

                <View
                    style={{ height: 540 * s, width: 640 * s }}
                >
                    <View style={{ height: 340 * s, width: 640 * s, backgroundColor: '#ff4500' }}>
                        <View style={{ height: 240 * s, width: 640 * s, }}>
                            <View style={{ height: 160 * s, width: 640 * s, marginTop: '10%', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: '#fff', fontSize: 40 }}>E企查</Text>
                                <Text style={{ color: '#fff', }}>一站式企业信息查询服务平台</Text>
                            </View>
                            <View style={{ height: 80 * s, width: 500 * s, flexDirection: 'row', marginLeft: '11%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                                <TextInput
                                    placeholder="请输入搜索名称"
                                    // clearTextOnFocus={true}
                                    onChangeText={this.searchhandle}
                                    style={{
                                        width: '85%',
                                        height: '100%'
                                    }}
                                />
                                <TouchableOpacity style={{ width: '15%', height: '80%' }} onPress={Actions.detailcompany}>
                                    <Icon
                                        name="search"
                                        style={{
                                            color: 'gray', padding: '20%', fontSize: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 200 * s, flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
                        <View style={{
                            width: '33%',
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity style={styles.btn} onPress={() => Actions.job()}>
                                <View style={styles.img}>
                                    <Icon
                                        name="eye"
                                        style={{
                                            color: '#ff4500', fontSize: 70
                                        }}
                                    />
                                </View>
                                <Text style={{ color: '#ff4500' }}>找工作</Text>
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
                                            color: '#ff4500', fontSize: 70
                                        }}
                                    />
                                </View>
                                <Text style={{ color: '#ff4500' }}>找客户</Text>
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
                                            color: '#ff4500', fontSize: 70
                                        }}
                                    />
                                </View>
                                <Text style={{ color: '#ff4500' }}>附近企业</Text>
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
                </View>
                <View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{
                            width: '100%',
                            height: 100 * s,
                            justifyContent: 'center',
                            padding: 4,
                            backgroundColor: '#ff4500'
                        }}>

                            <Text style={{ color: '#fc9', fontSize: 20, paddingLeft: '5%' }}>商业资讯</Text>

                        </View>
                        
                            <ScrollView
                                pagingEnabled={true}
                                horizontal={true}
                                style={{ height: 565 * s, width: 640 * s }}
                            >
                                {
                                this.state.tits.map((item, key) => (
                                    <View style={{
                                        width: 640*s,
                                        height: 450 * s,
                                        alignItems: 'center',
                                        marginTop: 100 * s,
                                    }}>
                                        <TouchableOpacity style={{ width: '90%', height: 450 * s }} onPress={() => Actions.detailnews({ 'newsid': item.newsid, 'userid': this.state.userid })}>
                                            <Image style={{width:'100%',height:'65%'}} resizeMode='stretch' source={require('../../assets/zixun.png')} />
                                            <Text style={{ marginTop: 15 * s, height: 40 * s, fontSize: 20,color:'#ff4500' }}>{item.newstitle}</Text>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 25 * s }}>

                                                <Text style={{ marginTop: 5 * s, width: '60%',color:'#ff4500' }}>{item.companyname}</Text>
                                                <Text style={{ marginTop: 5 * s, width: '30%' ,color:'#ff4500'}}>{item.newstime}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ))
                                
                                
                            }
                            
                                <View style={{
                                    width: 640*s,
                                    height: 450 * s,
                                    alignItems: 'center',
                                    marginTop: 100 * s,
                                }}>
                                    <TouchableOpacity style={{ width: '90%', height: 450 * s }} onPress={() => Actions.detailnews()}>
                                        <Image style={{width:'100%',height:'65%'}} resizeMode='stretch' source={require('../../assets/zixun.png')} />
                                        <Text style={{ marginTop: 15 * s, height: 40 * s, fontSize: 20,color:'#ff4500' }}>百度</Text>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 25 * s }}>

                                            <Text style={{ marginTop: 5 * s, width: '60%',color:'#ff4500' }}>百度</Text>
                                            <Text style={{ marginTop: 5 * s, width: '30%' ,color:'#ff4500'}}>时间</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                            </ScrollView>
                            
                    </View>
                </View>
            </View>



        )
    }
}
