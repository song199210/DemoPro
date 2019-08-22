import React, { Component } from 'react';
import {View,Text,StyleSheet,Dimensions,TouchableHighlight,ART} from "react-native";

class TabBarComponent extends Component {
  navigation(NavStr){
    this.props.navigation.navigate(NavStr)
  }
  render(){
    return (
      <View style={styles.tabBarBox}>
        <View style={styles.tabBar}>
          <View style={styles.tab}>
            <TouchableHighlight underlayColor="#efefef" style={styles.pressBox} onPress={()=>{this.navigation("ViewOne")}}>
              <Text>首页</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.tab}>
            <TouchableHighlight underlayColor="#efefef" style={styles.pressBox} onPress={()=>{this.navigation("ViewTwo")}}>
              <Text onPress={()=>{this.navigation("ViewTwo")}}>推荐</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.tab}>
            <TouchableHighlight underlayColor="#efefef" style={styles.pressBox} onPress={()=>{this.navigation("ViewThree")}}>
              <View style={styles.circle}>
                <Text style={{fontSize:26,fontWeight:"bold"}}>+</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.tab}>
            <TouchableHighlight underlayColor="#efefef" style={styles.pressBox} onPress={()=>{this.navigation("ViewThree")}}>
              <Text onPress={()=>{this.navigation("ViewThree")}}>购物车</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.tab}>
            <TouchableHighlight underlayColor="#efefef" style={styles.pressBox} onPress={()=>{this.navigation("ViewFour")}}>
              <Text onPress={()=>{this.navigation("ViewFour")}}>设置</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  tabBarBox:{
    borderTopWidth:1,
    borderColor:"#ccc",
    height:60,
    width:Dimensions.get("window").width,
    flexDirection:"column"
  },
  tabBar:{
    flex:1,
    backgroundColor:"#efefef",
    flexDirection:"row"
  },
  tab:{
    flex:1,
    textAlign:"center",
    flexWrap:"wrap",
    flexDirection:"column"
  },
  circle: {
    width:52,
    height:52,
    borderColor:"#f00",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#efefef",
    backgroundColor:"#f9d440",
    borderRadius:6
  },
  pressBox:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    height:60
  }
});
export default TabBarComponent;