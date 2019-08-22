import React,{Component} from "react";
import LoadingCom from "../components/LoadingCom";

import Store from "../store";
import {LOAD_ACTION_START,LOAD_ACTION_SUCCESS,LOAD_ACTION_ERROR,LOAD_ACTION_FUNS} from "../store/actions";

class DemoView extends Component {
  componentDidMount(){
     console.log(Store.getState()['show']);
  }

  getHttpData=()=>{
    Store.dispatch(LOAD_ACTION_FUNS(LOAD_ACTION_START));
    setTimeout(()=>{ //模拟http请求
      const res={ //模拟服务器返回的数据
        flag:"success",
        msg:"",
        datas:[
          {
            title:"请求成功"
          },{
            title:"请求成功"
          },{
            title:"请求成功"
          }
        ]
      }
      if(res["flag"] == "success"){ //请求成功
        Store.dispatch(LOAD_ACTION_FUNS(LOAD_ACTION_SUCCESS,{datas:res['datas']}));
      }else{ //请求失败
        Store.dispatch(LOAD_ACTION_FUNS(LOAD_ACTION_SUCCESS,{msg:res['msg']}));
      }
    },3000);
  }

  render(){
    const con_list=Store.getState()['datas'];
    let liCom=null;
    liCom=con_list.map((item)=>{
      return (<li>{item['title']}</li>)
    })
    return (
      <div>
        <LoadingCom show={Store.getState()['show']} />
        <button onClick={this.getHttpData}>开始HTTP请求</button>
        <div className="content">
          <ul>{liCom}</ul>
        </div>
      </div>
    );
  }
}

export default DemoView;