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
    ScrollView
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;

// const goods = [
//     {
//         title: '仙气十足的一条裙子',
//         num:1,
//         img: require('../../assets/wish1.jpg')
//     },
//     {
//         title: '简单的说就是好看',
//         num:2,
//         img: require('../../assets/wish2.jpg')
//     },
// ]

export default class Wear extends Component {
    constructor(){
        super();
        this.state={
            checkColor:'#cecccc',
            chooseAddress:0,
            data:[],
            list:[],
            num:[],
            color:[],
            i:[],
            DynImg:[],
        }
    }
    componentDidMount(){
        console.log("the userid:"+this.props.userid)
        fetch("http://192.168.43.245:3000/wear")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                    this.setState({
                        data:res,
                        list:[...this.state.list,i]
                })
            }
            for(var i =0;i<this.state.data.length;i++){
                this.setState({
                    num:[...this.state.num,this.state.data[i].likenum],
                    DynImg:[...this.state.DynImg,this.state.data[i].dynImg]
                })
            }
            console.log('this.state.DynImg'+this.state.DynImg)
            for(var i = 0;i<this.state.num.length;i++){
                if(Number(this.state.num[i])==0){
                    this.setState({
                        color:[...this.state.color,'black']
                    })
                }
                else if(this.state.num[i]!=0){
                    this.setState({
                        color:[...this.state.color,'red']
                    })
                }
                
            }
            // this.setState({data:res})
            console.log(this.state.color)
            console.log(this.state.data);
            console.log(this.state.list);
            console.log(this.state.num);
            // console.log("1].dynContentdata:"+this.state.data);
        })
    }
    changeNum=(i)=>{
        this.state.data.num++;
    }
    render() {
        return (
               
                <ScrollView>
                    <View style={{flex: 1,backgroundColor: '#fff'}}>
                        <View style={styles.header}>
                                <Text>穿搭</Text>
                        </View>
                    </View> 
                 {
                    this.state.list.map((i) =>(
                        <View>
                            <View style={styles.good}>
                                <TouchableOpacity onPress={()=>Actions.chuanda({'userid':this.state.data[i].userid})}>
                                <Image 
                                    // resizeMode="contain"
                                    source={{uri:`${this.state.DynImg[i]}`}}
                                    style={{height:350*s,marginTop: 10*s,width:280*s,borderRadius:10}}
                                />
                                </TouchableOpacity>
                                <Text style={{marginTop: 20*s}}>{this.state.data[i].dyContent}</Text>
                                {/* <Text style={{fontSize:10,marginLeft:-90,color:'red',paddingTop:8*s,marginTop:-5}} onPress={Actions.cloth}>衣服详情</Text> */}
                                <Text style={{fontSize:10,marginLeft:40,marginBottom:15*s}}>{this.state.num[i]}</Text>
                                <Icon name='heart' style={{fontSize:25,color:this.state.color[i],marginLeft:180*s,marginTop:-40*s}}/>
                            </View>


                            <View style={styles.good1}>
                                <TouchableOpacity onPress={()=>Actions.chuanda({'userid':this.state.data[i].userid})}>
                                <Image 
                                    // resizeMode="contain"
                                    source={require('../../assets/wish2.jpg')}
                                    style={{height:350*s,marginTop: 10*s,width:280*s,borderRadius:10}}
                                />
                                </TouchableOpacity> 
                                <Text style={{marginTop: 20*s}}>{this.state.data[i].dyContent}</Text>
                                {/* <Text style={{fontSize:10,marginLeft:-90,color:'red',paddingTop:8*s,marginTop:-5}} onPress={Actions.cloth}>衣服详情</Text> */}
                               {/* <Text></Text> */}
                               <Text style={{fontSize:10,marginLeft:40,marginBottom:15*s}}>{this.state.data[i].likenum}</Text>
                                <Icon name='heart' style={{fontSize:25,color:this.state.color[i],marginLeft:180*s,marginTop:-40*s}} onPress={this.changeNum(this.state.data.likenum)}/>
                            </View>
                        </View>
                        
                    ))
                }
                </ScrollView>
            
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    good:{
        // flirectionexD: 'row',
        //  justifyContent: 'space-evenly',
        //  alignItems: 'center',
        //   flexWrap: 'wrap', 
        width: '45%',
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 20*s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        justifyContent:'center',
        alignItems: 'center'

    },
    good1:{
        // flirectionexD: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', 
        width: '45%',
        backgroundColor: '#fff',
        marginLeft:240,
        marginRight: 20*s,
        marginTop: -320,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        justifyContent:'center',
        alignItems: 'center'
    }
})


