import React, { Component } from 'react';
import {Text,View,Image, StyleSheet,Dimensions,ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import {
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
  } from '@ant-design/react-native';

const { width ,height} = Dimensions.get('window');
const s = width / 304;

const styles=StyleSheet.create({
     btm:{
        width:width,
        height:46*s,
        flexDirection:'row',
        position:'relative',
        bottom:-9
     },
     btmm:{
        width:width/4,
        height:46*s,
        borderTopWidth:1,
        borderTopColor:'#c5c5c5',
        alignItems:'center',
        justifyContent:'center'
     },
     zu:{
        width:width/2,
        height:46*s,
        backgroundColor:'#ea3b3b',
        alignItems:'center',
        justifyContent:'center'
     },
     ginfo:{
         width:284*s,
         backgroundColor:'#e0dddd',
         marginLeft:10*s,
         borderRadius:5,
         marginTop:10
     },
     infos:{
         flexDirection:'row',
         marginLeft:10*s,
         marginTop:10*s
     },
     inf:{
         marginLeft:20*s
     },
     tan1:{
        height:288*s,
        backgroundColor:'white',
        position:'relative',
        top:height-287*s,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
     },
     size:{
         width:54*s,
         height:40*s,
         borderWidth:1,
         alignItems:'center',
         justifyContent:'center',
         marginLeft:10*s,
         marginTop:10*s
     }
})

let registerValue="";

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            tit:[]
        }
    }
    componentDidMount(){
        fetch('http://192.168.0.102:3000/merchandise')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tit: res});
            },console.log(this.state.tit))
    }
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.tit.map((item,key)=>(
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', }}>
                            <View style={{
                                width: '80%',
                                height: 350 * s,
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
                        </View>
                        ))
                    }
                </ScrollView>
                
            </View>
        )
    }
}
