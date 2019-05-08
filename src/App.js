import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";

import './App.scss';

import DemoOneView from "./views/DemoOneView";

moment.locale('zh-cn');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route path="/demoOne" component={DemoOneView}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
