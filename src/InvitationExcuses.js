import React, { Component } from 'react';
import $ from "jquery"
import ChoiceContents from "./ChoiceContents.js";



class InvitationExcuses extends Component  {
constructor(props){
  super(props)
  this.state = {
    data: ""
  }
}
componentWillAppear(callback){
  console.log("appear")
}
componentWillLeave(callback){
  console.log("disappear")
}
 componentDidMount(callback){
   $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 150),
    success: function(data) {
      this.setState({data: data.name})
    }.bind(this)
  })
 }
render() {
  return (
  <div className="choice-container">
    <ChoiceContents data={this.state.data} />
  </div>
  )
}
}

export default InvitationExcuses;
