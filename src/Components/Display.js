import React, { Component } from 'react';
import './Controller.css';

class Display extends Component {
    constructor(props) {
        super(props)
        }
    render() {
        return <div className='display'>
            <div className='display-result'>{this.props.result}</div>
        </div>
    }
}

export default Display;