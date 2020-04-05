import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import { Menu,Icon } from 'antd'


import logo_slog01 from './logo_slog01.png'

import './index.less'

const { SubMenu } = Menu;

class Head1 extends React.Component {
    constructor(props){
      super(props);
      this.onTitleClick = this.onTitleClick.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick = e => {
       console.log('click ', e);
      // this.setState({
      //   current: e.key,
      // });
      this.props.history.push(e.key)
    };
    onTitleClick = function({ key })	{
      this.props.history.push(key)
    }
    render() {
      return (
        <Menu onClick={this.handleClick}  mode="horizontal">
           
           <Menu.Item key='/home'>
            <span className='slog01' ><img  src={logo_slog01} alt='home' /></span>
           </Menu.Item>
           <Menu.Item key="/login">
               <span><Icon type="login" />登陆注册</span>
           </Menu.Item>
 
           <SubMenu
             key="/account/myAccount"
             title={
               <span className="submenu-title-wrapper">
                 <Icon type="user" />
                 个人中心
               </span>
             }
             onTitleClick={this.onTitleClick}
           >
               <Menu.Item key="/account/myOrder">我的订单</Menu.Item>
               <Menu.Item key="/account/employeeWelfare">团险保单</Menu.Item>
               <Menu.Item key="/account/claimEnquiry">理赔查询</Menu.Item>
               <Menu.Item key="/account/myInfo">我的资料</Menu.Item>
               <Menu.Item key="/account/myPoint">我的积分</Menu.Item>
           </SubMenu>
           <SubMenu
             title={
               <span className="submenu-title-wrapper">
                 <Icon type="team" />
                 众安团险 /group
               </span>
             }
           >
               <Menu.Item key="/group">员工商业保险</Menu.Item>
               <Menu.Item key="/hr/policy">企业hr保单管理</Menu.Item>
           </SubMenu>
           <Menu.Item key="/open/home/home.htm">
               开放平台
           </Menu.Item>
           <SubMenu
             title={
               <span className="submenu-title-wrapper">
                 <Icon type="team" />
                 公开信息披露
               </span>
             }
           >
               <Menu.Item key="/channel/public/publicInfo2018.html">公开信息披露</Menu.Item>
               <Menu.Item key="/channel/internetInfo/internetInfo.html">互联网保险信息披露</Menu.Item>
           </SubMenu>
         </Menu>

      );
    }
  }
export default withRouter(Head1);