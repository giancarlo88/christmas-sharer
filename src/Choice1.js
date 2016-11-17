import $ from 'jquery'
import React, { Component } from 'react';
import Choice1Contents from "./Choice1Contents.js";
class Choice1 extends Component  {
constructor(props){
  super(props)
  this.state = {
    data: ""
  }
}
 componentDidMount(){
   $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(data) {
      this.setState({data: data})
    }.bind(this)
  })
 }
render() {
  return (
  <div className="choice-container">
    <button onClick={this.toggleChoice} className="choice1">Choice1</button>
    <Choice1Contents/> 
  </div>
  )
}
}

export default Choice1;
