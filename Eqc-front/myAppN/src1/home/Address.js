import React, { Component } from 'react';
import {View,Text,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

const { width ,height} = Dimensions.get('window');
const s = width / 345;

export default class Address extends Component {
    constructor(){
        super();
        this.state={
            checkColor:'#cecccc',
            chooseAddress:0,
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.245:3000/address")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(this.props.userid==res[i].userid){
                    this.setState({
                        data:[...this.state.data,res[i]]
                    })
                }
            }
            console.log(this.state.data);
        })
    }
    changeA=(aid)=>{
        fetch("http://192.168.43.245:3000/address")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(aid==res[i].addressid){
                    const registerValue = {"addressid":aid};
                    fetch('http://192.168.43.245:3000/chooseAdd', {
                        method: "POST",
                        headers: {
                            "Content-type":"application/json;charset=utf-8",
                        },
                        body:JSON.stringify(registerValue) ,
                    }).then( res => res.text())
                      .then( data => {
                          console.log(data);
                      });
                    // console.log(clockId);
                }
                else{
                    this.setState({
                        checkColor:'#cecccc',
                        chooseAddress:false
                    })
                }
            }
        })
        // if(!this.state.chooseAddress){
        //     this.setState({
        //         checkColor:'#ea3b3b',
        //         chooseAddress:true
        //     })
        // }
        
    }
    render() {
        return (
            <View style={{width:width,height:height,backgroundColor:'white'}}>
                <View style={{flexDirection:'row',marginTop:20*s}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Icon name='arrowleft' style={{fontSize:16*s,marginLeft:10*s}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Actions.addAddress}>
                        <Text style={{color:'#ea3b3b',marginLeft:245*s}}>+新增地址</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:16*s,fontWeight:'bold',marginTop:20*s,marginLeft:10*s}}>收货地址</Text>
                {
                    this.state.data.map((item,index)=>(
                        <View style={{borderBottomWidth:1,borderBottomColor:'#cecccc',width:325*s,marginLeft:10*s,height:90*s}}>
                            <View style={{flexDirection:'row',marginTop:20*s}}>
                                <Text style={{marginLeft:10*s}}>{item.addname}</Text>
                                <Text style={{marginLeft:10*s,color:'#7a7979'}}>{item.addtel}</Text>
                            </View>
                            <View style={{marginLeft:10*s,flexDirection:'row'}}>
                                <Text>{item.addpro}</Text>
                                <Text style={{marginLeft:10*s}}>{item.addcity}</Text>
                                <Text style={{marginLeft:10*s}}>{item.addarea}</Text>
                            </View> 
                            <Text style={{marginLeft:10*s}}>{item.addinfo}</Text>
                            <TouchableOpacity onPress={()=>this.changeA(item.addressid)} style={{position:'relative',left:290*s,top:-35*s}}>
                                <Text>
                                    <Icon name='checkcircleo' style={{fontSize:20*s,color:this.state.checkColor}}/>
                                </Text>
                            </TouchableOpacity>
                        </View>    
                    ))
                }
                
            </View>
        )
    }
}
