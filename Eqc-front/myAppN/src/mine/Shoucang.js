import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import Item from '@ant-design/react-native/lib/list/ListItem';

export default class Shoucang extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:true,
            data:[],tit:[],
            list:[],
            userid:'',
            tipsid:[],
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
        fetch("http://192.168.43.36:3000/collect")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userid==this.state.userid){
                    // console.log(res[i].tipsid)
                    this.setState({
                        data:res,
                        
                        tipsid:[...this.state.tipsid,res[i].tipsid]
                    })
                }
                
            }
            // console.log('this.state.tipsid:'+this.state.tipsid)
            // this.setState({data:res})
            // console.log(this.state.data);
        })
        fetch("http://192.168.43.36:3000/tips")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                // console.log(res[i])
                for(var j =0;j<this.state.tipsid.length;j++){
                    // console.log('this.state.tipsid[j]'+this.state.tipsid[j])
                    // console.log('res[i].tipsid'+res[i].tipsid)
                    if(res[i].tipsid==this.state.tipsid[j]){
                        this.setState({
                            tit: [...this.state.tit,res[i]],
                            
                        })
                    }
                }
                
                
            
            // console.log("dfafd")
            // console.log('this.state.list'+this.state.list+'a')
            // console.log('a'+this.state.tit[i].tipstitle)
        
        }console.log("dfafd")
        console.log('this.state.list'+this.state.list+'a')
        for(var i =0;i<this.state.tit.length;i++){
            this.setState({
                list:[...this.state.list,i]
            })
        }
    })
        console.log("你进来了")
    }
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%',marginBottom:'5%',backgroundColor:'#ff4500'}}>
                    <Icon name='left' color='#fff' style={{paddingLeft:10,}} onPress={Actions.mine}/>
                    <Text style={{color:'#fff',fontSize:18,paddingLeft:'35%'}}>我的收藏</Text>
                </View>
                <View>
                {
                    this.state.list.map((i) =>(
                    <View style={{width:'90%',paddingLeft:'10%',marginLeft:'5%',backgroundColor:'#ff4500',marginBottom:'2%'}} ><Text style={{color:'#fff',lineHeight:40}} onPress={()=>Actions.zixun({'tipsid':this.state.tipsid[i],'userid':this.state.userid})}>{this.state.tit[i].tipstitle}</Text></View>
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