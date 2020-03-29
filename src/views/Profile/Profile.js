import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Tabs } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  InsuranceOutlined,
  TeamOutlined,
  FileSearchOutlined
} from '@ant-design/icons';


import LoadingIndicator  from '../Frame/LoadingIndicator';
import './Profile.css';
import NotFound from '../NotFound/NotFound';
import ServerError from '../NotFound/ServerError';
import {getCurrentUser} from '../../requests'
import { Head1,Head2,Tail } from '../Frame';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false
        }
        this.loadUserProfile = this.loadUserProfile.bind(this);
    }

    loadUserProfile(username) {
        this.setState({
            isLoading: true
        });

        getCurrentUser().then(resp=>{
            console.log(resp)
            this.setState({user : resp,isLoading : false})
        })
   
    }
      
    componentDidMount() {
        const username = this.props.match.params.username;
        this.loadUserProfile(username);
    }

    componentDidUpdate(nextProps) {
        if(this.props.match.params.username !== nextProps.match.params.username) {
            this.loadUserProfile(nextProps.match.params.username);
        }        
    }

    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />;
        }

        if(this.state.notFound) {
            return <NotFound />;
        }

        if(this.state.serverError) {
            return <ServerError />;
        }

        const tabBarStyle = {
            textAlign: 'center'
        };

        return (
            <div className="wrap">
                <Head1/>
                <Head2/>
                <Breadcrumb separator=">" className='crumb'>
                    <Breadcrumb.Item key='/home'>
                        <Link to='/home' >众安保险</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                </Breadcrumb>
                <div className="profile">
                    { 
                        this.state.user ? (
                            
                                <Layout style={{ minHeight: '100vh' }}>
                                  <Sider trigger={null} >
                                    <div className="logo" />
                                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                      <Menu.Item key="1">
                                        <FileSearchOutlined />
                                        <span>我的订单</span>
                                      </Menu.Item>
                                      <Menu.Item key="2">
                                        <TeamOutlined />
                                        <span>团险保单</span>
                                      </Menu.Item>
                                      <Menu.Item key="3">
                                        <InsuranceOutlined />
                                        <span>理赔查询</span>
                                      </Menu.Item>
                                      <Menu.Item key="4">
                                        <UserOutlined />
                                        <span>我的资料</span>
                                      </Menu.Item>
                                      <Menu.Item key="4">
                                        <FileSearchOutlined />
                                        <span>我的积分</span>
                                      </Menu.Item>

                                    </Menu>
                                  </Sider>
                                  <Layout className="site-layout">
                                    <Header className="site-layout-background" style={{ padding: 0 }} >
                                    <Menu
                                        theme="dark"
                                        mode="horizontal"
                                        defaultSelectedKeys={['2']}
                                    >
                                        <Menu.Item key="1">nav 1</Menu.Item>
                                        <Menu.Item key="2">nav 2</Menu.Item>
                                        <Menu.Item key="3">nav 3</Menu.Item>
                                    </Menu>
                                    </Header>
                                    <Content style={{ margin: '0 16px' }}>
                                      <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item>User</Breadcrumb.Item>
                                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                      </Breadcrumb>
                                      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                        Bill is a cat.
                                      </div>
                                    </Content>
                                    
                                  </Layout>
                                </Layout>
                            
                        ): null               
                    }
                </div>
                <Tail/>
            </div>

        );
    }
}

export default Profile;