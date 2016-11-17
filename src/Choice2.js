import React, { Component } from 'react';
import $ from "jquery"
import ChoiceContents from "./ChoiceContents.js";



class Choice2 extends Component  {
constructor(props){
  super(props)
  this.state = {
    data: ""
  }
}
 componentDidMount(){
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

export default Choice2;
