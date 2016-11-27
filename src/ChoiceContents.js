import React, { Component } from "react"; 


class ChoiceContents extends Component {
  
  render() {
    let classNames = `choice-contents ${this.props.active}`
    return (

      <div className={classNames}>
        <p>{this.props.data}</p>
      </div>
    )
  }  

  }

export default ChoiceContents;