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
            data:[],
            userID:'',
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.36:3000/collect")
        .then(res=>res.json())
        .then(res=>{
            // for(var i =0;i<res.length;i++){
            //     if(res[i].isloading==1){
            //         this.setState({
            //             userID:res[i].userid,
            //             data:res[i],
            //         }) 
            //     }
            // }
            this.setState({
                            data:res
                        }) 
            // console.log("userid:"+this.state.userID);
            // console.log('this.state.data:'+this.state.data);
        })
    }
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%',marginBottom:'5%',backgroundColor:'#fc9'}}>
                    <Icon name='left' color='#eee' style={{paddingLeft:10,}} onPress={Actions.pop}/>
                    <Text style={{fontSize:18,paddingLeft:'35%'}}>我的收藏</Text>
                </View>
                <ScrollView>
                {
                        // this.state.tits&&
                        this.state.data.map((item, key) => (
                    <View style={{width:'100%',paddingLeft:'10%',backgroundColor:'#fc9',marginBottom:'2%'}} ><Text style={{lineHeight:40}} onPress={()=>Actions.zixun()}>{item.tipstitle}</Text></View>
                        ))
    }
                </ScrollView>
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