import $ from 'jquery'
import React, { Component } from 'react';
import ChoiceContents from "./ChoiceContents";
import Share from "./Share"
//import './giftResponses.json'


class GiftResponses extends Component  {

callAPI(){
   $.ajax({
    url: 'data/giftResponses.json',
    method: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data)
      let quote = data.quotes[ Math.floor(Math.random()*data.quotes.length)]
      this.setState({data: quote})
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
    active: props.active,
    quote: props.quote
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
    <Share quote={this.state.data} active={this.state.active}/>
  </div>
  )
}
}

export default GiftResponses;
