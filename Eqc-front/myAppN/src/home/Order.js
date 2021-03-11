import React, { Component } from 'react';
import {View,Text, TouchableOpacity,Dimensions,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

const { width ,height} = Dimensions.get('window');
const s = width / 340;

const styles=StyleSheet.create({
    head:{
        width:width,
        height:50,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center'
    },
    tit:{
        fontSize:14*s,
        fontWeight:'bold',
        marginTop:15*s,
        marginLeft:10*s
    },
    address:{
        width:320*s,
        height:80*s,
        backgroundColor:'white',
        marginTop:15*s,
        marginLeft:10*s,
        borderRadius:5
    },
    zudate:{
        width:320*s,
        height:80*s,
        backgroundColor:'white',
        marginTop:10*s,
        marginLeft:10*s,
        borderRadius:5
    },
    box:{
        width:320*s,
        height:270*s,
        backgroundColor:'white',
        marginTop:10*s,
        marginLeft:10*s,
        borderRadius:5
    },
    btn:{
        width:320*s,
        height:50,
        backgroundColor:'#ea3b3b',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        left:10*s,
        top:height-580*s

    }
})



export default class Order extends Component {
    
    constructor(props){
        super(props)
        this.state={
            dadd:'请添加收货地址',
            data:'',
            mon:'',
            money:'',
            enddate:'',
            startdate:this.props.date.split("-")
        }
    }
    componentDidMount(){
        console.log(this.props.date.split("-"))
        console.log(this.props.merid)
        fetch("http://192.168.43.245:3000/address")
        .then(res=>res.json())
        .then(res=>{
            if(res!=null){
                this.setState({
                    dadd:res[0].addpro+res[0].addcity+res[0].addarea+res[0].addinfo
                })
            }
            else{
                this.setState({
                    dadd:'请添加收货地址'
                })
            }
        })
        fetch("http://192.168.43.245:3000/merchandise")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(this.props.merid==res[i].merid){
                    this.setState({
                        data:res[i],
                        mon:Number(res[i].mermon)*Number(res[i].mtime),
                        money:Number(res[i].price)+Number(res[i].mermon)*Number(res[i].mtime)
                    })
                }
            }
            console.log(this.state.data.merimg)
        })
        // getNextDay(this.props.date,this.state.data.mtime);
        // getNextDay(d,t){    
        //     console.log(d,t);//格式为---2019-02-13 3
        //     d = new Date(d);
        //     console.log(d)//格式为---Wed Feb 13 2019 08:00:00 GMT+0800 (中国标准时间)
        //     d = +d + (1000*60*60*24)*t;
        //     console.log(d)//格式为--时间戳1550275200000
        //     d = new Date(d);
        //     console.log(d)//格式为---Sat Feb 16 2019 08:00:00 GMT+0800 (中国标准时间)
        //     return new Date(d).format("yyyy-MM-dd")   //格式为"2019-02-16 00:00:00"
        //   }
    }
    
    render() {
        return (
            <View style={{width:width,height:height,backgroundColor:'#f7f7f7'}}>
                <View style={styles.head}>
                <TouchableOpacity><Icon name='left' style={{fontSize:16*s,marginLeft:10*s}}/></TouchableOpacity>
                    
                    <Text style={{fontSize:16*s,marginLeft:112*s,fontWeight:'bold'}}>确认订单</Text>
                </View>
                <TouchableOpacity onPress={()=>Actions.address({'userid':'u123456'})} style={styles.address}>
                    <Text style={styles.tit}>收货地址</Text>
                    <Text style={{color:'#aba8a8',marginTop:10*s,marginLeft:10*s}}>{this.state.dadd}</Text>
                    <Icon name='right' style={{fontSize:14*s,marginTop:-28*s,marginLeft:295*s}}/>
                </TouchableOpacity>
                <View style={styles.zudate}>
                    <Text style={styles.tit}>租借时间</Text>
                    <View style={{flexDirection:'row',marginLeft:10*s,marginTop:10*s}}>
                        <Text>起租</Text>
                        <Text style={{fontSize:14*s,fontWeight:'bold',marginLeft:10*s}}>{this.state.startdate[1]}月{this.state.startdate[2]}日</Text>
                        <Text style={{marginLeft:50*s}}>{this.state.data.mtime}天</Text>
                        <Text style={{marginLeft:50*s}}>归还</Text>
                        <Text style={{fontSize:14*s,fontWeight:'bold',marginLeft:10*s}}>4月12日</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.tit}>租借单品</Text>
                    <View style={{flexDirection:'row',marginTop:10*s}}>
                    <Image  style={{width:60*s,height:60*s,marginLeft:10*s}} resizeMode='stretch' source={require('../../assets/v2_q5klar.jpg')} />
                        {/* {
                            ?:超过多少字省略号代替
                        } */}
                        <Text style={{marginLeft:10*s}}>BLANVHE 酒红色蕾丝...</Text>
                    <Text style={{position:'relative',right:-20*s,fontWeight:'bold'}}>￥{this.state.data.price}/{this.state.data.mtime}天</Text>
                        <Text style={{marginTop:40*s,marginLeft:-200*s,color:'#aba8a8'}}>S码</Text>
                    </View>
                    <Text style={styles.tit}>租借费用</Text>
                    <View style={{marginTop:10*s,marginLeft:10*s,flexDirection:'row'}}>
                        <Text>总押金4天</Text>
                        <Text style={{position:'relative',right:-195*s,fontWeight:'bold'}}>￥{this.state.data.price}</Text>
                    </View>
                    <View style={{marginTop:10*s,marginLeft:10*s,flexDirection:'row'}}>
                        <Text>押金</Text>
                        <Text style={{position:'relative',right:-228*s,fontWeight:'bold'}}>￥{this.state.mon}</Text>
                    </View>
                    <View style={{borderTopWidth:1,width:300*s,marginLeft:10*s,borderTopColor:'#aba8a8',marginTop:10*s}}></View>
                    <View style={{marginTop:10*s,marginLeft:238*s,flexDirection:'row'}}>
                        <Text>总计</Text>
                        <Text style={{color:'#ea3b3b',fontSize:14*s,fontWeight:'bold'}}>￥{this.state.money}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'white',fontSize:16*s,fontWeight:'bold'}}>确认</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
