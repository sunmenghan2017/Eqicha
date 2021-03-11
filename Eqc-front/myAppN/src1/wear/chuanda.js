import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';
// import { Icon } from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;


export default class chuanda extends Component {
    constructor(){
        super();
        this.state={
            checkColor:'#cecccc',
            chooseAddress:0,
            data:[],
            data1:[],
            i:'',
            n:'0',
            color:'black',
            Img1:'',
        }
    }
    componentDidMount(){
        console.log("the userid:"+this.props.userid);
        fetch("http://192.168.43.245:3000/user")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(this.props.userid==res[i].userid){
                    this.setState({
                        data:res[i]
                    })
                }
            }
            console.log(res[0]);
            console.log(res[0].userauatar)
            fetch("http://192.168.43.245:3000/wear")
            .then(res=>res.json())
            .then(res=>{
                for(var i=0;i<res.length;i++){
                    if(this.props.userid==res[i].userid){
                        this.setState({
                            data1:res[i],
                            i:res[i].likenum,
                            img1:res[i].dynImg
                        })
                    }
                }
                console.log("this.state.i:"+this.state.i)
            })
        })
        console.log(this.state.i)
        // if(this.state.i==0){
        //     this.setState({
        //         color:'black'
        //     })
        // }else {
        //     this.setState({
        //         color:'red'
        //     })
        // }
        
    }
    changeNum=()=>{
        console.log("in the change");
        this.setState({
            n:Number(this.state.n)+1
        })

        console.log("the num of n:"+this.state.n);
        console.log("the num of i:"+this.state.i);
            if(this.state.n%2==0){
                this.setState({
                    i:Number(this.state.i)+1,
                    color:'red'
                })
            }else{
                this.setState({
                    i:Number(this.state.i)-1,
                    color:'black'
                })
                }
        
        
        
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Icon name='leftcircleo' style={{fontSize:36*s,marginLeft:10*s,marginTop:20*s}}/>
                    </TouchableOpacity>
                <Image source={'data:image/jpg;base64,'+this.state.data.dynImg} style={{width:120*s,height:120*s,borderRadius:50,marginLeft:10}}/>
                <View style={{width:100,height:40,backgroundColor:'gray',opacity:0.2,marginLeft:100,marginTop:-50}}>
                    <Text style={{paddingLeft:25,paddingTop:8,color:'black'}}>{this.state.data.username}</Text>
                </View>
                
                <Image source={{uri:`${this.state.img1}`}} style={{width:350,height:350,marginTop:30,marginLeft:10*s,borderRadius:10}}/>
                <Text style={{paddingLeft:50,paddingTop:20,fontFamily:'微软雅黑'}}>{this.state.data1.dynContent}</Text>
                <TouchableOpacity onPress={this.changeNum}>
                    <View 
                    style={{marginLeft:250,marginTop:30,flexDirection:'row'}}

                    >
                        <Text>{this.state.i}</Text>
                        <Icon name='heart' style={{fontSize:25,color:this.state.color,marginLeft:50*s}}/>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}


