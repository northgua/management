import React from 'react';
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from 'react-router-dom'
import routerConfig from './router';
import { SettingOutlined, PieChartOutlined } from '@ant-design/icons';
import './App.less'

const { SubMenu } = Menu;

function MainPage() {
  return (
    <Router>
    <div className="main-page">
      <div className="menu">
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<SettingOutlined />} title="项目管理">
            <Menu.Item key="1"><Link to="/">新建项目</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/manage">项目验收</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PieChartOutlined />} title="综合分析">
            <Menu.Item key="3"><Link to="/charts">进度统计</Link></Menu.Item>
            <Menu.Item key="4">案例分析</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className="content">
          <Routes>
            {
              routerConfig.map(item =>
              <Route
                key={item.path}
                path={item.path}
                element={<item.component />}
              />)
            }
           </Routes>
      </div>
    </div>
  </Router>
  );
}

export default MainPage;