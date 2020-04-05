import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb} from 'antd'

class MyOrder extends Component {

    constructor(props){
        super(props)
        this.state = {
            user: null,
            isLoading: false,
            selected : '1',
            orders  : null
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick = ({ item, key, keyPath, domEvent }) => {
        switch(key){
            case '1' :
                this.setState({selected : '1'})
                
                break;
            case '2' :
                this.setState({selected : '2'})
                break;
            case '3' :
                this.setState({selected : '3'})
                break;
        }
    }

    render() {
        return (
            <Layout className="site-layout">
            <Layout.Header className="site-layout-background" style={{ padding: 0 }} >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    onClick = {this.onClick}
                >
                    <Menu.Item key="1">已完成保单</Menu.Item>
                    <Menu.Item key="2">待处理保单</Menu.Item>
                    <Menu.Item key="3">待续保保单</Menu.Item>
                </Menu>
            </Layout.Header>
            <Layout.Content style={{ margin: '0 16px' }}>
              MyPolicy
            </Layout.Content>
            
          </Layout>
        );
    }
}

export default MyOrder;