import React, { Component } from "react"; 


class ChoiceContents extends Component {
  
  render() {
    return (
  
      <div className="choice-contents">
        <p>{this.props.data}</p>
      </div>
    )
  }  

  }

export default ChoiceContents;