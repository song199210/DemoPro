import React,{Component} from "react";

class ListComponent extends Component {
  render(){
    const licom=this.props.datas.map((item,index)=>{
      return <li key={index}><b>{item['name']}：</b><span>{item['desc']}</span></li>;
    });
    return (
      <div>
        <ul>
          {licom}
        </ul>
      </div>
    );
  }
}

export default ListComponent;