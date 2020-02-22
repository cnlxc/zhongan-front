import React, { Component } from 'react';
import { Head1,Head2,Tail } from '../Frame';
class Home extends Component {
    render() {
        return (
            <div>
                <Head1></Head1>
                <Head2></Head2>
                Home
                <Tail></Tail>
            </div>
        );
    }
}

export default Home;