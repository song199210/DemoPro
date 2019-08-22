import React,{Component} from "react";
import {createBottomTabNavigator,createAppContainer} from "react-navigation";
//自定义导航栏组件
import TabBarComponent from "../components/TabBarComponent";
//App页面组件
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";
import ViewThree from "./ViewThree";
import ViewFour from "./ViewFour";


const BtmTabBarMain=createBottomTabNavigator({
  ViewOne:ViewOne,
  ViewTwo:ViewTwo,
  ViewThree:ViewThree,
  ViewFour:ViewFour
},{
  initialRouteName:"ViewOne",
  tabBarComponent:TabBarComponent, //加载自定义导航组件
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    }
  }
});
export default createAppContainer(BtmTabBarMain);