import React, { Component } from 'react';
import { Menu,Icon } from 'antd'
import { Link,withRouter } from 'react-router-dom'
import slog02 from './logo01.png'
import './index.less'

const { SubMenu } = Menu;
const typeOfInsurance = [
    {
        typeName : '健康险',
        url      : '/productlist/32-41#channelEnName=health'
    },
    {
        typeName : '意外险',
        url      : '/productlist/33-41#channelEnName=accident'
    },
    {
        typeName : '旅行险',
        url      : '/productlist/34-41#channelEnName=travel'
    },
    {
        typeName : '特色保险',
        url      : '/productlist/35-41#channelEnName=special'
    },
    {
        typeName : '车险',
        url      : '/?utm_source=zyggbz#channelEnName=chexian'
    },
    {
        typeName : '头条',
        url      : '/toutiao#channelEnName=toutiao'
    },
]


class Head2 extends Component {

    handleClick = e => {
        this.props.history.push(e.key)
      };

    render() {
        return (
            <div className='div-head2'>
                <Menu onClick={this.handleClick} mode="horizontal">
                    {/*home1 home2 仅仅是为了使key不重复避免报错 用重定向搞定*/}
                    <Menu.Item className='slog02' key='/home1'>
                        <img src={slog02} alt='众安保险'></img>
                    </Menu.Item>
                    <Menu.Item key="/home">
                        <Icon type="home" />首页
                    </Menu.Item>
                    {typeOfInsurance.map( item => {
                        return (
                            <Menu.Item key={item.url}>
                                {item.typeName}
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </div>
        );
    }
}

export default withRouter(Head2);