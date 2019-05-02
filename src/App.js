import React from 'react';
import './App.css';
import Controller  from './Components/Controller'
import Display  from './Components/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        result: '',
    }
    }
  onClickNumber = (e) => {
    if (e.target.name === 'AC') {
      this.setState({
        result: ''
      })
    }
    else if (e.target.name === '=') {
      this.calculate()
    }
    else {
        this.setState({
        result: this.state.result + e.target.name
      })
    } 
  }

  // calculate = () => {
  //   let str = this.state.result
  //   let arr = str.split('')
  //   if (arr.includes('+')) {
  //     this.setState({
  //       result: parseInt(arr[0]) + parseInt(arr[2])
  //     })
  //   }
  //   else if (arr.includes('-')) {
  //     this.setState({
  //       result: parseInt(arr[0]) - parseInt(arr[2])
  //     })
  //   }
    
  //   console.log(arr)
  // }
  calculate = () => {
    var str = this.state.result
    this.setState({
      result: eval(str)
    })

  };

  render() {
    return <div className="outline">
      <Display result={this.state.result}></Display>
      <Controller onClickNumber={this.onClickNumber}></Controller>
    </div>
  
  }
  
}

export default App;
