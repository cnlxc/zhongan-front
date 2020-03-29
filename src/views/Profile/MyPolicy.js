import React, { Component } from 'react';
import { Layout, Header, Menu, Breadcrumb, Content} from 'antd'

class MyOrder extends Component {

    constructor(props){
        super(props)
        this.state = {
            user: null,
            isLoading: false,
            selected : '1'
        }
        //this.loadUserProfile = this.loadUserProfile.bind(this);
    }


    render() {
        return (
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1">已完成保单</Menu.Item>
                    <Menu.Item key="2">待处理保单</Menu.Item>
                    <Menu.Item key="3">待续保保单</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              
            </Content>
            
          </Layout>
        );
    }
}

export default MyOrder;