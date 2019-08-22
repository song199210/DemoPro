import React, { Component } from 'react';
import {View,Text,StyleSheet,Dimensions,ScrollView} from "react-native";

class ViewOne extends Component {
  static navigationOptions = (props)=>{
    return {
      title:"商品列表"
    }
  };
  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.content}>我是首页页面</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    width:Dimensions.get("window").width,
    flex:1,
    alignItems:"center",
    justifyContent: 'center'
  },
  content:{
    fontSize:20,
    fontWeight:"bold"
  }  
});
export default ViewOne;