import React, { Component } from 'react';
import { Head1,Head2,Tail } from '../Frame';
import Entity from './Entity';
import './Home.less'



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