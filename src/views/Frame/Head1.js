import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu,Icon } from 'antd'
import logo_slog01 from './logo_slog01.png'
import './index.less'

const { SubMenu } = Menu;

class Head1 extends React.Component {
    state = {
      current: 'mail',
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
  
    render() {
      return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
           
           <Menu.Item>
           <span className='slog01' ><Link  to="/home" ><img  src={logo_slog01} alt='home' />></Link>
           </span>
           </Menu.Item>
           <Menu.Item keylogin="login">
               <span><Icon type="login" />登陆注册</span>
           </Menu.Item>
 
           <SubMenu
             title={
               <span className="submenu-title-wrapper">
                 <Icon type="user" />
                 个人中心
               </span>
             }
           >
               <Menu.Item key="setting:1">我的订单</Menu.Item>
               <Menu.Item key="setting:2">团险保单</Menu.Item>
               <Menu.Item key="setting:3">理赔查询</Menu.Item>
               <Menu.Item key="setting:4">我的资料</Menu.Item>
               <Menu.Item key="setting:5">我的积分</Menu.Item>
           </SubMenu>
           <SubMenu
             title={
               <span className="submenu-title-wrapper">
                 <Icon type="team" />
                 众安团险
               </span>
             }
           >
               <Menu.Item key="setting:1">员工商业保险</Menu.Item>
               <Menu.Item key="setting:2">企业hr保单管理</Menu.Item>
           </SubMenu>
           <Menu.Item key="alipay">
             <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
               开放平台
             </a>
           </Menu.Item>
           <SubMenu
             title={
               <span className="submenu-title-wrapper">
                 <Icon type="team" />
                 公开信息披露
               </span>
             }
           >
               <Menu.Item key="setting:1">公开信息披露</Menu.Item>
               <Menu.Item key="setting:2">互联网保险信息披露</Menu.Item>
           </SubMenu>
         </Menu>

      );
    }
  }
export default Head1;