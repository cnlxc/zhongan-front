import React, { Component } from 'react';
import { Head1,Head2,Tail } from '../Frame';
import Entity from './Entity';
import './Home.less'

const imgUrlTest = [
    {img : '/file/picture/home/尊享e生2019.png'},
    {img : '/file/picture/home/尊享e生爸妈版.png'},
    {img : '/file/picture/home/众享e家意外险.png'},
    {img : '/file/picture/home/飞享e生.png'},
    {img : '/file/picture/home/保骉车险.png}'},
]
    

class Home extends Component {

    render() {
        return (
            <div>
            <Head1/>
            <Head2/>
            <Entity/>
            <Tail/>
            </div>

        );
    }
}

export default Home;