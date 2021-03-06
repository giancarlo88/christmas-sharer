import React, { Component } from 'react';
import $ from "jquery"
import ChoiceContents from "./ChoiceContents.js";


class SeasonsGreetings extends Component  {
  state = {
    data:  ""
  }
componentDidAppear(callback){
  console.log("appear")
}
componentWillLeave(callback){
  console.log("disappear")
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
export default SeasonsGreetings;
