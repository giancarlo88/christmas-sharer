import $ from 'jquery'
import React, { Component } from 'react';
import ChoiceContents from "./ChoiceContents.js";
class Choice1 extends Component  {
constructor(props){
  super(props)
  this.state = {
    data: ""
  }
}
 componentDidMount(){
   $.ajax({
    url: "https://api.icndb.com/jokes/random",
    success: function(data) {
      this.setState({data: data.value.joke})
    }.bind(this)
  })
 }
render() {
  return (
  <div className="choice-container">
    <ChoiceContents data={this.state.data}/> 
  </div>
  )
}
}

export default Choice1;
