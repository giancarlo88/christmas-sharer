import React, { Component } from "react"; 


class ChoiceContents extends Component {
  
  render() {
    return (
  
      <div className="choice-contents">
        {this.props.data} 
      </div>
    )
  }  

  }

export default ChoiceContents;