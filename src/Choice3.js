import React, { Component } from 'react';
import $ from "jquery"
import ChoiceContents from "./ChoiceContents.js";


class Choice3 extends Component  {
  state = {
    data:  ""
  }
 componentDidMount(){
 $.ajax({
    url: "http://numbersapi.com/random",
    success: function(data) {
      this.setState({data: data})
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
export default Choice3;
