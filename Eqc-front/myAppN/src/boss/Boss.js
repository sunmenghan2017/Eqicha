import React, { Component } from 'react';
import {
    TextInput, TouchableOpacity, StatusBar,
    View, Text, Image,
    FlatList, Dimensions, ScrollView, StyleSheet, Alert
} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import Detailboss from './Detailboss';

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

export default class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showValue: '',
            color: false,
            // wish: false,
            bossname: '',
            search: '',
            personid: '',
            tits: [],
            page: 1,
            tit: [], data: [],
            userid: this.props.userid
        }
    }
    // onChangeText(inputData){
    //     this.setState({showValue:inputData});
    // }
    // showData(){
    //     Alert(this.state.showValue);
    // }

    componentDidMount() {
        console.log(this.props.userid)
        // fetch('http://192.168.10.5:3000/person')
        fetch('http://192.168.43.36:3000/person')
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
                this.setState({ tits: res, data: res.personname });
            })
        // fetch('http://192.168.0.102:3000/merchandise')
        //     .then(res => res.json())
        //     .then(res => {
        //         this.setState({ tit: res });
        //     }, console.log(this.state.tit))
    }
    searchhandle = (text) => {
        this.setState({ search: text })
    }


    // searchCheck = () => {
    //     var bossname = this.state.bossname;

    //     if (bossname !== null) {
    //       for (var i = 0; i < this.state.data.length; i++) {
    //         if (bossname === this.state.data[i].personname) {

    //           registerValue = { "personid": this.state.data[i].personid  }
    //           this.setState({ personid: this.state.personid})
    //             // fetch('http://192.168.10.5:3000/user4', {
    //             fetch('http://192.168.43.36:3000/person1', {
    //             method: "POST",
    //             headers: {
    //               "Content-type": "application/json;charset=utf-8",
    //             },
    //             body: JSON.stringify(registerValue),
    //           }).then(res => res.text())
    //             .then(data => {
    //               console.log(data);
    //             });

    //             Actions.detailboss();



    //         } 
    //         if (bossname !== this.state.data[i].bossname) {
    //           alert("暂未查询到，请重新搜索");
    //         }
    //       }
    //     }
    //     else {
    //         Actions.boss();
    //     }
    //     console.log("registerValue.userid"+registerValue.userid)
    //     console.log(this.state.data)
    //   }
    // onChangeTextKeyword(text){
    //     var  reg = new RegExp(text,"i");
    //     if(!text){
    //         this.setState({
    //             color:false,
    //             dataLis:this.state.data,
    //             replaceText:''
    //         });
    //         return;
    //     }
    //     else if(text){
    //         let newData=[];
    //         for (var i = 0;i<this.state.data.length;i++){
    //             let ds =this.state.data[i];
    //             if(ds.title&&title.indexOf(text)!=-1){
    //                 newData.push(ds);
    //             }
    //         }
    //         this.setState({
    //             color:true,
    //             dataLis:newData,
    //             replaceText:text
    //         });
    //         return;
    //     }

    // }


    render() {
        //         console.log('home')
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ff4500'
            }}>


                <View style={{ height: 150 * s, width: 640 * s, backgroundColor: '#ff4500' }}>

                    <View style={{ height: 60 * s, width: 640 * s, backgroundColor: '#fff', marginBottom: '4%', paddingLeft: '40%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '100%', height: '80%', color: '#ff4500', fontSize: 30, }}>查Boss</Text>
                    </View>


                    <View style={{ height: 60 * s, width: 500 * s, flexDirection: 'row', marginLeft: '11%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>

                        <TextInput
                            placeholder="请输入Boss名"
                            onChangeText={this.searchhandle}
                            style={{
                                width: '85%',
                                height: '100%'
                            }}
                        />
                        <TouchableOpacity style={{ width: '15%', height: '80%' }} onPress={Actions.detailboss}>
                            <Icon1
                                name="search"
                                style={{
                                    color: 'gray', padding: '20%', fontSize: 20
                                }}
                            />
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={{
                    width: '100%',
                    height: 100 * s,
                    justifyContent: 'center',
                    marginTop: 20 * s,
                    padding: 4,
                    backgroundColor: '#fff'
                }}>

                    <Text style={{ color: '#fc6', fontSize: 20, paddingLeft: '5%' }}>热门人物</Text>

                </View>

                <View style={{
                    width: '100%',
                    height: 450 * s,
                    alignItems: 'center',
                    marginTop: 20 * s,
                    padding: 4,
                    backgroundColor: '#ff4500',
                    overflow:'hidden'
                }}>
                    <View>
                        {
                        // this.state.tits&&
                        this.state.tits.map((item, key) => (
                            <View style={{ width: '90%', height: 100 * s, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginBottom: '2%' }}>
                                <TouchableOpacity style={{ width: '30%', }} onPress={() => Actions.detailboss({ 'personid': item.personid, 'userid': this.state.userid })}>
                                    <Image style={{ width: '90%', height: '90%' }} resizeMode='contain' source={require('../../assets/icon/1.jpg')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '70%', }} onPress={() => Actions.detailboss({ 'personid': item.personid, 'userid': this.state.userid })}>
                                    <Text style={{ marginTop: 15 * s, height: 45 * s, fontSize: 25 }}>{item.personname}</Text>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 25 * s }}>

                                        <Text style={{ marginTop: 5 * s, width: '60%' }}>{item.personintro.lenght <= 10 ? item.personintro : item.personintro.slice(0, 10) + '···'}</Text>
                                        <Text style={{ width: '35%' }}>{item.companyname.lenght <= 6 ? item.companyname : item.companyname.slice(0, 6)}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                    </View>
                    <View style={{ width: '90%', height: 100 * s, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginBottom: '2%' }}>
                        <TouchableOpacity style={{ width: '30%', }} onPress={() => Actions.detailboss()}>
                            <Image style={{ width: '90%', height: '90%' }} resizeMode='contain' source={require('../../assets/icon/1.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '70%', }} onPress={() => Actions.detailboss()}>
                            <Text style={{ marginTop: 15 * s, height: 45 * s, fontSize: 25 }}>李彦宏</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 25 * s }}>

                                <Text style={{ marginTop: 5 * s, width: '60%' }}>李彦宏（Robin···</Text>
                                <Text style={{ width: '35%' }}>百度</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>



        )
    }
}
