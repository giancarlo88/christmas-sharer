import React, { Component } from 'react';
import $ from "jquery"
import ChoiceContents from "./ChoiceContents.js";
import Share from "./Share"



class InvitationExcuses extends Component  {
constructor(props){
  super(props)
  this.state = {
    active: "",
    data: ""
  }
}
 callAPI(){
    $.ajax({
    url: 'data/invitationExcuses.json',
    method: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data)
      let quote = data.quotes[Math.floor(Math.random()*data.quotes.length)]
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
    <div className="pattern-container invitation-excuses"/>
    <ChoiceContents active="invitation-excuses" data={this.state.data} />
      <Share quote={this.state.data} active={this.state.active}/>
  </div>
  )
}
}

export default InvitationExcuses;
