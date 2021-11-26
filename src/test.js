import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom'
// import routerConfig from './router';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './App.less'

function App() {
  // 声明一个新的叫做 “count” 的 state 变量
  return (
   <div className="main-page">
     <div className="menu">
        <Menu
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
            </Menu.Item>
          </Menu>
     </div>
     <div className="content">

     </div>
   </div>
  );
}

// function App() {
//   // 声明一个新的叫做 “count” 的 state 变量
//   return (
//    <Router>
//       <Routes>
//         {
//           routerConfig.map(item =>
//           <Route
//             key={item.path}
//             path={item.path}
//             element={<item.component />}
//           />)
//         }
//       </Routes>
//    </Router>
//   );
// }

export default App;