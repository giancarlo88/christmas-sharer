import React, { Component } from 'react';
import Choice3Contents from "./Choice3Contents.js";


class Choice3 extends Component  {
  // constructor(props){
  //   super(props)
  //   this.toggleChoice = this.props.toggleChoice.bind(this)
  // }
  render() {
    return (
      <div className="choice-container">
       <button onClick={this.toggleChoice} className="choice3">Choice3</button>
       <Choice3Contents/> 
      </div>
    )
  }
}
export default Choice3;
