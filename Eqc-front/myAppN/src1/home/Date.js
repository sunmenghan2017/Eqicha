import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import MinimalismCalendar from 'react-native-ocalendar';
import { Actions } from 'react-native-router-flux';
export default class Date extends Component {
  constructor(props){
     super(props)
     this.state={
        data:"未传值"
     }
     this.DateTransfer=this.DateTransfer.bind(this)
  }
  //数据设置
  DateTransfer(cont){
    // Alert.alert(cont)
     this.setState({
        data:cont[0]+'-'+cont[1]+'-'+cont[2]
     })
  }
  choo=()=>{
    // console.log('a'+this.props.merid)
    Actions.order({"date":this.state.data,'merid':this.props.merid});
  }
  render() {

    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={{paddingVertical:15,
              paddingHorizontal:30,borderRadius:3,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'black'}}>{this.state.data}</Text>
          </TouchableOpacity>
         <MinimalismCalendar DateTransfer={this.DateTransfer}/>
         <TouchableOpacity onPress={this.choo} style={styles.ensure}>
           <Text style={{color:'white'}}>确定</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  ensure:{
    width:150,
    height:40,
    backgroundColor:'#ea3b3b',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    position:'relative',
    top:-300,
    left:100
  }
});