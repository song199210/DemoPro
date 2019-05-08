import React,{Component} from "react";
import {Layout,Menu,Icon} from "antd";
import {menuData} from "../datas/data.js"; //模拟侧边栏数据

const {
  Header, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class SubMenuCom extends Component {
  state = {
    collapsed: false,
  };
  constructor(props){
    super(props);
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  //用递归函数实现无限级导航栏效果
  computedSubMenus=(menus,ckey)=>{
    const _that=this;
    let menusJsx=[];
    if(menus.length != 0){
      menus.forEach((item)=>{
        let com=null;
        if(item[ckey].length != 0){
          com=(
            <SubMenu
                key={item.index}
                title={<span><Icon type="user" /><span>{item.name}</span></span>}
              >
             { _that.computedSubMenus(item[ckey],ckey)}
            </SubMenu>
          );
        }else{
          com=(
            <Menu.Item key={item.index}>
              <Icon type="file" />
              <span>{item.name}</span>
            </Menu.Item>
          );
        }
        menusJsx.push(com);
      });
      return menusJsx;
    }
  }
  render(){
    let SubMenuJsx=this.computedSubMenus(menuData,"children");
    return (
        <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {SubMenuJsx}
        </Menu>
      </Sider>
    );
  }
}

export default SubMenuCom;