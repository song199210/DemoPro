import React,{Component} from "react";
import {createMaterialTopTabNavigator ,createAppContainer} from "react-navigation";

//首页子页面
import ViewOne from "./ViewOne"; //商品列表
import ChildView from "./ChildView"; //商品详情


const TopBarNav=createMaterialTopTabNavigator ({
  ViewOne:{
    screen:ViewOne
  },
  ChildView:{
    screen:ChildView
  }
},{
    initialRouteName:"ViewOne"
});
export default createAppContainer(TopBarNav);