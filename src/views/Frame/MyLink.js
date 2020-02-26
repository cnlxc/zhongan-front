import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class MyLink extends Component {
    constructor(props){
        super(props)
        this.go = this.go.bind(this)
    }
    go(){
        this.props.history.push(this.props.to)
    }
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default withRouter(MyLink);