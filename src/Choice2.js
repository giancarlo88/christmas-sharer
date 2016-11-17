import React, { Component } from 'react';
import Choice2Contents from "./Choice2Contents.js";



class Choice2 extends Component  {
// constructor(props){
//   super(props)
//   this.toggleChoice = this.props.toggleChoice.bind(this)
 
// }
render() {
  return (
  <div className="choice-container">
    <button onClick={this.toggleChoice} className="choice1">Choice2</button>
    <Choice2Contents/>
  </div>
  )
}
}

export default Choice2;
