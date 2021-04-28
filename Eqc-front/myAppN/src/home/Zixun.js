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

export default class Zixun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wish: false,
            tits: [],
            page: 1,
            tit: [], data: '',
            user:this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.tipsid)
        fetch('http://192.168.43.36:3000/tips')
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(this.props.tipsid==res[i].tipsid){
                    this.setState({
                        data:res[i],
                    })
                }
            }
        })
    }
    shoucang=()=>{
        console.log(this.props.userid)
        if(!this.state.wish){
            registerValue ={'userid':this.state.user,'tipsid':this.props.tipsid}
            this.setState({
                name:'star',
                color:'#ea3b3b',
                wish:true
            })
            fetch('http://192.168.43.36:3000/collecttips', {
            method: "POST",
            headers: {
              "Content-type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(registerValue),
          }).then(res => res.text())
            .then(data => {
              console.log(data);
            });
        }
        else{
            this.setState({
                name:'star',
                color:'gary',
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



                <View style={{ height: 60 * s, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                    <TouchableOpacity style={{ width: '25%', height: '100%' }}>
                        <Icon
                            name="left"
                            style={{
                                color: '#fc9', padding: '10%', fontSize: 20
                            }}
                            onPress={Actions.pop}
                        />
                    </TouchableOpacity>
                    {/* <Text>{this.state.data.tipstitle}</Text> */}
                    <Text style={{width:'50%',fontSize:30}}>国际收支差额</Text>
                    <Icon name="star" style={{width:'10%',float:'right',color:'gray'}} onPress={this.shoucang}/>

                </View>
                <ScrollView style={{backgroundColor:'#fc9'}}>


                    <View style={{width:'100%',height:200,marginTop:'5%',alignItems:'flex-start',paddingLeft:'5%',paddingRight:'5%'}}><Text style={{lineHeight:40}}>国际收支差额既受汇率的影响又国际收支差额既受汇率的影响又国际收支差额既受汇率的影响又国际收支差额既受汇率的影响又{this.state.data.tipscontent}</Text>
                    </View>
                </ScrollView>


            </View>



        )
    }
}
