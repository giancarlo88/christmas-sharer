import React, { Component } from 'react';
import $ from "jquery"
import ChoiceContents from "./ChoiceContents.js";
import Share from "./Share"


class SeasonsGreetings extends Component  {
constructor(props){
  super(props)
  this.state = {
    active: "",
    data: ""
  }
}
 callAPI(){
 $.ajax({
    url: "http://numbersapi.com/random",
    success: function(data) {
      this.setState({data: data})
    }.bind(this)
  })
 }
componentWillReceiveProps(props){
  this.setState({
    active: props.active
  })
}
componentDidMount(){
  this.callAPI();
 }
  render() {
    let classNames = `choice-container ${this.state.active ? "" : 'hidden'}`
    return (
      <div className={classNames}>
       <ChoiceContents data={this.state.data}/>
        <button onClick={this.callAPI.bind(this)}>Another one!</button>
        <Share active={this.state.active}/>
      </div>
    )
  }
}
export default SeasonsGreetings;
