import React,{Component} from "react";
import ListComponent from "./ListComponent";
import SearchComponent from "./SearchComponent";
import {datas} from "../data"; //模拟数据

class DemoInfoView extends Component {
  state={
    data_list:[]
  }
  getList=(name)=>{//模拟http请求，name为请求参数
    if(name == ""){//请求参数为空时返回所有的数据
      return datas;
    }
    //请求参数不为空时，返回查询到的数据
    let i=0,len=datas.length;
    var res_data=[]; //响应数据
    for(;i<len;i++){
      if(datas[i]['name'] == name){
        res_data.push(datas[i]);
        break;
      }
    }
    return res_data; //返回响应数据
  }
  changeList=(name)=>{//将请求到的数据赋值state.data_list
    var keyword=name == undefined?"":name;
    this.setState({
      data_list:this.getList(keyword)
    });
  }
  searCallBack=(val)=>{
    this.changeList(val);
  }
  componentDidMount() {
    this.changeList();
  }
  render(){
    return (
      <div style={{margin:"20px"}}>
        <SearchComponent onSuccess={this.searCallBack} />
        <h4>查询结果</h4>
        <ListComponent datas={this.state.data_list}/>
      </div>
    );
  }
}

export default DemoInfoView;