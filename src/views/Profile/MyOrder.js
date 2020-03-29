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
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1">我的保单</Menu.Item>
                    <Menu.Item key="2">我的凭证</Menu.Item>
                    <Menu.Item key="3">其他订单</Menu.Item>
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
        );
    }
}

export default MyOrder;