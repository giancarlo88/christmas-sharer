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
    url: 'data/seasonsGreetings.json',
    method: "GET",
    dataType: "json",
    success: function(data) {
      let quote = data.quotes[ Math.floor(Math.random()*data.quotes.length)]
      this.setState({data: quote})
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
      <div className="pattern-container seasons-greetings"/>
       <ChoiceContents callAPI={this.callAPI.bind(this)} active="seasons-greetings" data={this.state.data}/>
       <Share selected='seasons-greetings' quote={this.state.data} active={this.state.active}/>
      </div>
    )
  }
}
export default SeasonsGreetings;
