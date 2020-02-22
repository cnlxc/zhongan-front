import React, { Component } from 'react';
import { Menu,Icon } from 'antd'
import { Link } from 'react-router-dom'
import slog02 from './logo01.png'
import './index.less'

const { SubMenu } = Menu;

class Head2 extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Link className='slog02' to='/home'>
                        <img src={slog02} alt='众安保险'></img>
                    </Link>
                    <Menu.Item keylogin="login">
                        <span><Icon type="home" />首页</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Head2;