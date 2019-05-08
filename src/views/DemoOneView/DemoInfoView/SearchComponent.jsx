import React,{Component} from "react";

class SearchComponent extends Component {
  state={
    name:""
  }
  search=()=>{
    var str=this.state.name;
    this.props.onSuccess(str);
  }
  setName=(evt)=>{//设置姓名
    var tar=evt.target;
    this.setState({
      name:tar.value
    });
  }
  render(){
    return (
      <div>
        <form>
          <input type="text" onChange={(evt)=>{this.setName(evt)}}/>
          <button type="button" onClick={()=>{this.search()}}>查询</button>
        </form>
      </div>
    );
  }
}

export default SearchComponent;