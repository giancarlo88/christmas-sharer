import $ from 'jquery'
import React, { Component } from 'react';
import ChoiceContents from "./ChoiceContents";
import Share from "./Share"

class GiftResponses extends Component  {

callAPI(){
   $.ajax({
    url: "https://api.icndb.com/jokes/random",
    success: function(data) {
      this.setState({data: data.value.joke})
    }.bind(this)
  })
}
constructor(props){
  super(props)
  this.state = {
    active:"", 
    data: ""
  }
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
    <Share active={this.state.active}/>
  </div>
  )
}
}

export default GiftResponses;
