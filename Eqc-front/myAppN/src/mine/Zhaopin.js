import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Zhaopin extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:true,
            data:[],tit:[],
            list:[],
            userid:'',
            zhaopinid:[],
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.36:3000/user")
        .then(res=>res.json())
        .then(res=>{
            for(var i =0;i<res.length;i++){
                if(res[i].isloading==1){
                    this.setState({
                        userid:res[i].userid,
                    })
                }
            }
            console.log("userid:"+this.state.userid);
        })
        fetch("http://192.168.43.36:3000/zhaopin")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userid==this.state.userid){
                    this.setState({
                        data:res[i],                
                        tit: [...this.state.tit,res[i]],
                    })
                    
            // console.log('this.state.tipsid:'+res[i].userid)
                }           
            }
            // this.setState({data:res})
            console.log(this.state.data);
            for(var i =0;i<this.state.tit.length;i++){
                this.setState({
                    list:[...this.state.list,i]
                })
            }
        })
        
    }
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%',marginBottom:'5%',backgroundColor:'#ff4500'}}>
                    <Icon name='left' color='#fff' style={{paddingLeft:10,}} onPress={Actions.mine}/>
                    <Text style={{color:'#fff',fontSize:18,paddingLeft:'35%'}}>我的招聘</Text>
                </View>
                <View>
                {
                    this.state.list.map((i) =>(
                    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#ff4500',marginBottom:'2%',marginLeft:'5%'}} ><Icon name='user' color='#fff' style={{paddingLeft:10,lineHeight:40}}/><Text style={{color:'#fff',lineHeight:40}} >{this.state.tit[i].zhiwei}</Text><Text style={{color:'#fff',lineHeight:40}} >{this.state.tit[i].companyname}</Text></View>
                        ))
    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:50,
        width:'30%',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20
    }
})