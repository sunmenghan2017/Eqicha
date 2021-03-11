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
    img:{
        width:'100%',
        height:'60%',
        flexDirection: 'row',
        flexWrap:'wrap',
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
    constructor(props){
        super(props);
        this.state={
            // name:'heart-o',
            // color:'',
            wish:false,
            tits: [],
            page:1,
            tit:[],data:'',
            // user:this.props.userid
        }
    }
    componentDidMount(){
        console.log(this.props.userid)
        fetch('http://192.168.0.102:3000/sale')
            .then(res=>res.json())
            .then(res=>{
                // for(var i=0;i<res.length;i++){
                //     if(this.props.saleid==res[i].saleid){
                //         this.setState({
                //             data:res[i],
                //         })
                //     }
                // }
                console.log(res)
                this.setState({tits: res});
            })
        fetch('http://192.168.0.102:3000/merchandise')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tit: res});
            },console.log(this.state.tit))
    }
    // componentDidUpdate(){
    //     fetch('http://192.168.0.106:3000/user')
    //         .then(res=>res.json())
    //         .then(res=>{
    //             this.setState({tits: res});
    //         })
    // }
    shoucang =()=>{
        if(!this.state.wish){
            this.refs.changeColor.color='red',
            this.setState({
                // name:'heart',
                wish:true
            })
        }
        else{
            this.refs.changeColor.color='#000',
            this.setState({
                // name:'heart-o',
                wish:false
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

                <ScrollView
                    style={{ height: 740 * s, width: 640 * s }}
                >
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                        style={{ height: 290 * s, width: 640 * s }}
                    >
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737077.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737129.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737195.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737314.png')} />
                        </View>
                    </ScrollView>
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                    >
                        {
                            // this.state.tits&&
                            this.state.tits.map((item,key)=>(
                            <View style={{
                                width: 190 * s,
                                height: 200 * s,
                                alignItems: 'center',
                                justifyContent:'center'
                            }}>
                                <TouchableOpacity style={styles.btn}  onPress={()=>Actions.listdetail()}>
                                    <Text>{item.saletit}</Text>
                                    <Text style={{fontSize:10}}>{item.saleinfo}</Text>
                                    <View style={styles.img}>
                                        <Image style={{width:'30%',height:'100%'}} resizeMode='stretch' source={{uri:'https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kktg.jpg'}}/>
                                        <Image  style={{width:'45%',height:'50%'}} resizeMode='stretch' source={{uri:'https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kkvl.jpg'}}/>
                                    </View>
                                </TouchableOpacity> 
                            </View>
                                ))
                        }   
                       
                    </ScrollView>
                </ScrollView>
                <ScrollView>
                    {
                        this.state.tit.map((item,key)=>(
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', }}>
                            <View style={{
                                width: '45%',
                                height: 500 * s,
                                alignItems: 'center',
                                justifyContent:'center',
                                marginTop: 20*s,
                                padding:4,
                                backgroundColor:'#eee'
                            }}>
                                <TouchableOpacity style={{width:'100%',height:'90%'}} onPress={()=>Actions.detail({'merid':item.merid,'userid':this.state.user})}>
                                    <Image  style={{width:'100%',height:'90%',borderRadius:20}} 
                                    resizeMode='stretch' 
                                    source={{uri:`${item.merimg}`}} />
                                    <Text style={{marginTop:15*s}}>{item.tit.slice(8,)}</Text>
                                    {/* <Text style={{marginTop:8*s}}>{item.shopbrand}</Text> */}
                                </TouchableOpacity>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'10%'}}>
                                    <Text style={{marginTop:5*s}}>{item.shopbrand}</Text>
                                    <Text style={{color:'red',}}>￥{item.price}/4日</Text>
                                    {/* <TouchableOpacity  onPress={this.shoucang}>
                                        <Icon name='heart-o' ref="changeColor" style={{fontSize:25}}/>
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                        
                            <View style={{
                                width: '45%',
                                height: 500 * s,
                                alignItems: 'center',
                                marginTop: 20*s,
                                padding:4,
                                backgroundColor:'#eee'
                            }}>
                                <TouchableOpacity style={{width:'100%',height:'90%'}}>
                                    <Image   style={{width:'100%',height:'90%',borderRadius:20}} resizeMode='stretch' source={require('../../assets/v2_q5klq0.jpg')} />
                                    <Text style={{marginTop:15*s}}>宝石蓝抹胸晚礼服</Text>
                                    {/* <Text style={{marginTop:8*s}}>BLANCHE</Text> */}
                                </TouchableOpacity>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'10%'}}>
                                
                                    <Text style={{marginTop:5*s}}>BLANCHE</Text>
                                    <Text style={{color:'red'}}>￥399/4日</Text>
                                {/* <TouchableOpacity  >
                                    <Icon name='heart-o' style={{fontSize:25,}}/>
                                </TouchableOpacity> */}
                                </View>
                            </View>
                        </View>
                        ))
                    }
                </ScrollView>
             </View>



        )
    }
}
