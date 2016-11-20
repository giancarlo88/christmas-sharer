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
    url: "http://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 150),
    success: function(data) {
      this.setState({data: data.name})
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
    <ChoiceContents data={this.state.data} />
      <button onClick={this.callAPI.bind(this)}>Another one!</button>
      <Share active={this.state.active}/>
  </div>
  )
}
}

export default InvitationExcuses;
