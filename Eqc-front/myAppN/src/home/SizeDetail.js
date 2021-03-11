import React, { Component } from 'react';
import {View,Text,Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';


const { width ,height} = Dimensions.get('window');
const s = width / 345;

const styles=StyleSheet.create({
    ginfo:{
        width:325*s,
        backgroundColor:'#e0dddd',
        marginLeft:10*s,
        borderRadius:5,
        marginTop:20*s
    },
    infos:{
        flexDirection:'row',
        marginLeft:10*s,
        marginTop:10*s
    },
    inf:{
        marginLeft:20*s,
        color:'#7a7979'
    },
    infs:{
        marginLeft:25*s,
    }
})

export default class SizeDetail extends Component {
    constructor(){
        super()
        this.state={
            data:'',
            sizes:'',
            size:[],
            sizebody:[],
            sizeinfo:[],
            R:[]
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.245:3000/size")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(this.props.sizeid==res[i].sizeid){
                    this.setState({
                        data:res[i],
                        sizes:res[i].sizes.split(','),
                        sizebody:res[i].sizebody.split(','),
                        sizeinfo:res[i].sizeinfo.split(',')
                    })
                }
            }
            for(var p=0;p<this.state.sizes.length;p++){
                if(p%2==0){
                    this.setState({
                        size: [...this.state.size,this.state.sizes[p]]
                    })
                }
            }
            for ( var n = 0;n < this.state.sizeinfo.length;n += this.state.size.length) {
                this.setState({
                    R:[...this.state.R,this.state.sizeinfo.slice(n,n + this.state.size.length)]  
                })
            }
            
            console.log(this.state.R);
        })
    }
    render() {
        return (
            <View>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Icon name='leftcircleo' style={{fontSize:16*s,marginLeft:10*s,marginTop:20*s}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:10*s,fontWeight:'bold',marginTop:20*s,fontSize:16*s}}>商品尺码表</Text>
                    <View style={styles.ginfo}>
                        <View style={styles.infos}>
                            <Text>尺码</Text>
                            {
                                this.state.size.map((item)=>(
                                    <Text style={styles.infs}>{item}</Text>
                                ))
                            }
                        </View>
                        
                        {
                            this.state.sizebody.map((item)=>(
                                <View style={styles.infos}>
                                    <Text>{item}</Text>
                                    {
                                        this.state.R.map((item,index)=>(
                                            <Text style={styles.inf}>{item[index]}</Text>
                                        ))
                                    }
                                </View>   
                            ))
                        }       

{/* {
                                        this.state.R.map((item,index)=>(
                                            // item[index].map((item1)=>{
                                                <Text style={styles.inf}>{item}</Text>
                                            // })
                                            ))
                                        })
                                    } */}
                        {/* <View style={styles.infos}>
                            <Text>胸围</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                        </View>
                        <View style={styles.infos}>
                            <Text>腰围</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                        </View> */}
                        {/* <View style={[styles.infos,{marginBottom:10*s}]}>
                            <Text>臀围</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                        </View>  */}
                   
                    </View>
                </View>
        )
    }
}
