import React, { Component } from 'react';
import './Controller.css';

class Controller extends React.Component {
    constructor(props) {
        super(props)
        }

    onClickNumber = (button) => {
        this.props.onClickNumber(button)
    }

    render() {
        return <div>
            <div>
                <button name='AC' onClick={this.onClickNumber}>AC</button>
                <button name='+/-' onClick={this.onClickNumber}>+/-</button>
                <button name='%' onClick={this.onClickNumber}>%</button>
                <button name='/'className='operator' onClick={this.onClickNumber}>÷</button>
            </div>
            <div>
                <button name='7' onClick={this.onClickNumber}>7</button>
                <button name='8' onClick={this.onClickNumber}>8</button>
                <button name='9' onClick={this.onClickNumber}>9</button>
                <button name='*' className='operator' onClick={this.onClickNumber}>x</button>
            </div>
            <div>
                <button name='4' onClick={this.onClickNumber}>4</button>
                <button name='5' onClick={this.onClickNumber}>5</button>
                <button name='6' onClick={this.onClickNumber}>6</button>
                <button name='-' className='operator' onClick={this.onClickNumber}>-</button>
            </div>
            <div>
                <button name='1' onClick={this.onClickNumber}>1</button>
                <button name='2' onClick={this.onClickNumber}>2</button>
                <button name='3' onClick={this.onClickNumber}>3</button>
                <button name='+' className='operator' onClick={this.onClickNumber}>+</button>
            </div>
            <div>
                <button name='0' style={{width:'400px'}} onClick={this.onClickNumber}>0</button>
                <button name='.' onClick={this.onClickNumber}>.</button>
                <button name='=' className='operator' onClick={this.onClickNumber}>=</button>
            </div>
        </div>
    }
}

export default Controller;