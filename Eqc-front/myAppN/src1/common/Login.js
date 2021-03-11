import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Button from 'react-native-button';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils';
import ImagePicker from 'react-native-image-picker';
const { width } = Dimensions.get('window')
const s = width / 640;
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

let registerValue="";


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false,
      tips:'',
      imageUrl: true,
      data: [],
      userid: ''
    }
  }
  componentDidMount() {
    this.setState({ isloading: false });
    this.getData();
    fetch('http://192.168.43.245:3000/user')
            .then(res=>res.json())
            .then(res=>{
                this.setState({data: res});
            })
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  loginCheck = () => {
    var loginname = this.state.username;
    var password = this.state.pwd;
    this.setState({ isloading: true });
    
    if (loginname !== null) {
      for (var i = 0; i < this.state.data.length; i++) {
        if (loginname === this.state.data[i].username && password === this.state.data[i].userpwd) {
          // this.setState({isloading:this.state.data[i].isloading })
          registerValue = { "userid": this.state.data[i].userid,"isloading":1  }
          this.setState({ userid: this.state.userid})
          // fetch('http://192.168.0.106:3000/denglu', {
            fetch('http://192.168.43.245:3000/user2', {
            method: "POST",
            headers: {
              "Content-type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(registerValue),
          }).then(res => res.text())
            .then(data => {
              console.log(data);
            });
          
          alert("success!");
          AsyncStorage.setItem('user', JSON.stringify(this.state.data))
            .then(() => {
              // this.setState({ isloading: false })
              // this.setState({isloading:this.state.data[i].isloading })
              Actions.homePage({'userid':this.state.data.userid});
            })
            console.log(this.state.data.userid)
          // window.location = '/tab'+this.state.data[i].userId;
        }
        if (loginname === this.state.data[i].username && password !== this.state.data[i].userpwd) {
          alert("error!");
        }
      }
    }
    else {
      alert("未完成验证");
    }
    console.log("registerValue.userid"+registerValue.userid)
    console.log(this.state.data)
  }

  // loginCheck = () => {
  //   if(
  //     this.state.username != '' &&
  //     this.state.pwd != ''
  //   ){
  //     myFetch.post('/login',{
  //       username:this.state.username,
  //       pwd:this.state.pwd}
  //     ).then(res=>{
  //       if(res){
  //         AsyncStorage.setItem('user',JSON.stringify(res.data))
  //         .then(()=>{
  //           this.setState({isloading:true},()=>{
  //             setTimeout(()=>Actions.homePage(),1000);
  //           });
  //         })
  //       }else{
  //         this.setState({tips:"用户名/密码不正确 或 未注册"});
  //       }
  //     })
  //   }else{
  //     this.setState({tips:"请填写登陆信息！"});
  //   }
  // }



  getData = () => {
    AsyncStorage.getItem('imgUrl')
      .then((res) => {
        this.setState({
          imageUrl: JSON.parse(res)
        })
      });
  }

  takephoto = () => {
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
        var storeData = async () => {
          const source1 = JSON.stringify(source);
          await AsyncStorage.setItem('imgUrl', source1,
            () => { console.log('store success') }
          )
        }
        storeData();
      }
    });
  }

  render() {
    return (
      <View style={styles.box}>
        <View style={styles.tit}>
          <TouchableOpacity style={{ width: '10%', paddingLeft: '5%' }} onPress={() => Actions.homePage()}>
            <Icon1
              name="close"
              style={{ color: '#fff', fontSize: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 25, width: '80%', textAlign: 'center' }}>登录</Text>
        </View>
        <View style={styles.slide}>
          <View style={{
            width: 130, height: 130,
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            backgroundColor: '#fff'
          }} >
            <Button
              onPress={() => { this.takephoto() }}
            >
              {
                this.state.imageUrl
                  ?
                  <Image
                    style={{ width: 130, height: 130, }}
                    source={this.state.imageUrl}
                  />
                  :
                  <Image source={require('../../assets/v2_q5kx5v.jpg')} style={{ width: 130, height: 130, }} ></Image>

              }

            </Button>
          </View>
        </View>
        <View
          style={{ width: 580 * s, height: 400 * s, alignItems: 'center' }}>
          <View style={styles.title}>
            <Icon1 name="user" color="red" />
            <TextInput placeholder="用户名/手机号"
              onChangeText={this.userhandle}
            />
          </View>
          <View style={styles.title}>
            <Icon1 name="keyboard-o" color="red" />
            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="登录密码"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.login}
            onPress={this.loginCheck}>
            <Text style={{ color: '#fff', fontSize: 25 }}>登录</Text>
          </TouchableOpacity>
          <View style={styles.rows}>
            <TouchableOpacity onPress={() => Actions.register()} style={{ width: 180 * s, height: 50 * s, alignItems: 'center', justifyContent: 'center' }} >
              <Text style={{ fontSize: 16, color: "blue" }}>手机快速注册</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.forget()} style={{ width: 120 * s, height: 50 * s, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: "blue" }}>忘记密码</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          this.state.isloading
            ? <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ textAlign: 'center' }}>正在登录···</Text></View>
            : null
        }
        <View style={{ width: 640 * s, height: 220 * s, alignItems: 'center', position: 'relative', marginTop: 100 * s, }}>
          <Text style={{ color: 'gray' }}>第三方登录</Text>
          <View style={styles.ricon}>
            <TouchableOpacity style={{ width: 50 * s, height: 50 * s, borderRadius: 25, borderColor: 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon1
                name="weixin"
                style={{ color: 'green', fontSize: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 50 * s, height: 50 * s, borderRadius: 25, borderColor: 'blue', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} >
              <Icon1
                name="qq"
                style={{ color: 'blue', fontSize: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 50 * s, height: 50 * s, borderRadius: 25, borderColor: 'red', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon1
                name="weibo"
                style={{ color: 'red', fontSize: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  tit: {
    width: 640 * s,
    height: 50,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  icons: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 25
  },
  title: {
    width: 580 * s,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#ccc',
    paddingLeft: 20 * s,
    marginTop: 20 * s
  },
  login: {
    width: 340 * s,
    height: 50,
    backgroundColor: 'red',
    marginTop: 30 * s,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  slide: {
    width: 640 * s,
    height: 260 * s,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  rbtn: {
    color: 'gray',
    fontSize: 20
  },
  rows: {
    width: 540 * s,
    height: 50 * s,
    flexDirection: 'row',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20 * s
  },
  ricon: {
    width: 640 * s,
    height: 50 * s,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30 * s,
  }
})