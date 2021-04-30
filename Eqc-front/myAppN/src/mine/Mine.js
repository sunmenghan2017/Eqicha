import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { TouchableOpacity,StatusBar, Image,ImageBackground,AsyncStorage,Modal,
    FlatList, Dimensions ,ScrollView, StyleSheet,TextInput } from 'react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';


const options = {
    title: '选择头像',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '从图库选择照片',
    customButtons: [{ name: 'fb', title: '从Facebook选择照片' }],
    cancelButtonTitle: '取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class Mine extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:true,
            data:[],
            userID:'',
        }
    }
    componentDidMount(){
        this.getData();  
        // fetch("http://192.168.10.5:3000/user")
        fetch("http://192.168.43.36:3000/user")
        .then(res=>res.json())
        .then(res=>{
            for(var i =0;i<res.length;i++){
                if(res[i].isloading==1){
                    this.setState({
                        userID:res[i].userid,
                        data:res[i],
                    })
                }
            }
            console.log("userid:"+this.state.userID);
            // console.log('this.state.data:'+this.state.data);
        })
        // fetch("http://192.168.43.245:3000/user")
        // .then(res=>res.json())
        // .then(res=>{ 
        //     for(var i=0;i<res.length;i++){
        //         console.log(res[i])
        //         console.log(this.state.userID)
        //         if(res[i].userid==this.state.userID){
        //             this.setState({
        //                 data:res[i],
        //             })
        //         }
                    
        //     }
        //     console.log(res)
        //     // this.setState({data:res})
        //     console.log('this.state.data:'+this.state.data);
        //     // console.log("1].dynContentdata:"+this.state.data);
        // })
    }
    getData = ()=>{
        AsyncStorage.getItem('imgUrl')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        });
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                });
                //将图片存到本地
                var storeData=async ()=>{
                    const source1 = JSON.stringify(source);
                    await AsyncStorage.setItem('imgUrl',source1,
                    ()=>{console.log('store success')}
                )}
                storeData();
            }
        })
    }
    render() {
        return (
            <View  style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row',height:50,width:'100%',backgroundColor:'#fff'}}>
                    <Text style={{fontSize:18,paddingLeft:'45%',color:'#ff4500',lineHeight:50}}>我的</Text>
                    <Icon name="setting" style={{paddingLeft:130,color:'#ff4500',lineHeight:50}} onPress={Actions.xiugai}/>
                </View>
                <View style={{height:140,flexDirection: 'row',borderBottomWidth:1,borderBottomColor:'#bbb',backgroundColor:'#ff4500',paddingTop:'1%'}}>
                    <Button 
                        onPress={()=>{this.takephoto()}}
                        >
                            {
                            this.state.imageUrl
                            ?
                            <Image 
                            style={{width:80,height:80,borderRadius:40,marginTop:20,marginLeft:10}} 
                            source={this.state.imageUrl}
                            />
                            :
                            <Image source={ require('../../assets/icon/1.jpg') } style={{width:130,height:130,borderRadius:65,}} ></Image>

                            }
                    </Button>
                        <Text style={{fontSize:17, color:'#fff',paddingTop:50,paddingLeft:40}}>{this.state.data.username}</Text>
                        <Text style={{fontSize:17, color:'#fff',paddingTop:50,paddingLeft:40}}>{this.state.data.companyname}</Text>
                        <Text style={{fontSize:17, color:'#fff',paddingTop:50,paddingLeft:40}}>{this.state.data.userzhiwei}</Text>
                </View>
                <View style={{width:'100%',height:'2%',backgroundColor:'#fff'}}></View>
                <View style={styles.view2}>
                    <Text style={{ color:'#fff',paddingLeft:20}} onPress={Actions.shoucang}>我的收藏</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{ color:'#fff',paddingLeft:20}} onPress={Actions.fabu}>我的招聘</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{ color:'#fff',paddingLeft:20}} onPress={Actions.tousu}>我的消息</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{ color:'#fff',paddingLeft:20}} onPress={Actions.lianxi}>联系我们</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{ color:'#fff',paddingLeft:20}} onPress={Actions.shezhi}>设置</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        width:'30%',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
    },
    view2:{
        borderBottomWidth:1,
        borderBottomColor:'#bbb',
        height:50,
        justifyContent:'center',
        backgroundColor:'#ff4500'
    }
})