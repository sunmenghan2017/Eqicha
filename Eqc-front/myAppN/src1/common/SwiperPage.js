import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity,Dimensions } from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')
const s = width / 640;
export default class SwiperPage extends Component {
    start = () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            console.log('store end')
            this.props.afterInstall();
        });
        // await this.props.afterInstall();
    };
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/v2_q5khwj.jpg')} />
                    <Text style={styles.start1}>衣服是自我表达</Text>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/v2_q5kws3.jpg')} />
                    <Text style={styles.start1}>衣服是自我表达</Text>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/v2_q5kwpw.jpg')} />
                    {/* <Button onPress={this.start} style={styles.start}>开始体验</Button> */}
                    
                    <Text style={styles.start1}>衣服是外在内涵</Text>
                    <TouchableOpacity onPress={this.start} style={styles.start}>
                        <Text style={{color:'red'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%'
    },
    slide1: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    start: {
        bottom: 200,
        width: 120,
        height: 40,
        textAlignVertical: 'center',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor: 'red',
        borderRadius: 20,
        borderColor:'red',
        borderWidth:1,
        // opacity:0.1
        // zIndex:999
    },
    start1: {
        bottom: 100,
        width: 600*s,
        height: 40,
        textAlign:'center',
        textAlignVertical: 'center',
        alignItems:'center',
        justifyContent:'center',
        // zIndex:999
    }
});
