import React, { Component } from 'react';
import { Head1,Head2,Tail } from '../Frame'
import Entity from './Entity'
class ProudctList extends Component {
    render() {
        return (
            <div>
                <Head1></Head1>
                <Head2></Head2>
                <Entity/>
                <Tail></Tail>
            </div>
        );
    }
}

export default ProudctList;