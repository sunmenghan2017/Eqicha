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

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:'heart-o',
            // color:'',
            wish: false,
            tits: [],
            page: 1,
            tit: [], data: '',
            // user:this.props.userid
        }
    }
    componentDidMount() {
        console.log(this.props.userid)
        // fetch('http://192.168.10.5:3000/person')
        fetch('http://192.168.43.36:3000/project')
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

    }


    render() {
        //         console.log('home')
        return (
            <ScrollView style={{
                flex:1,
                backgroundColor: '#eee'
            }}>


                <View style={{ height: 30 * s, width: 640 * s, backgroundColor: '#eee', }}>
                    <TouchableOpacity style={{ width: '15%', height: '80%' }}  onPress={Actions.pop}>
                        <Icon name='left' color='#fc9' style={{ paddingLeft: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 20 * s,
                    padding: 4,
                }}>
                    {
                        // this.state.tits&&
                        this.state.tits.map((item, key) => (
                            <View style={{ width: '90%', height: 200 * s, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2%' }}>

                                <TouchableOpacity style={{ width: '90%', }} onPress={() => Actions.detailboss()}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 130 * s }}>
                                        <Text style={{ marginTop: 5 * s, width: '50%', height: 40 * s, fontSize: 25 }}>{item.projectname}</Text>
                                        <Text style={{ marginTop: 15 * s, width: '20%', }}>{item.personname}</Text>
                                        <Text style={{ marginTop: 15 * s, width: '30%', }}>{item.companyname}</Text>
                                    </View>
                                    <Text style={{ marginTop: 5 * s, width: '100%', }}>{item.projectintro}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>

            </ScrollView>



        )
    }
}
