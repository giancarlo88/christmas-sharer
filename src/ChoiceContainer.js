import React, { Component } from 'react';
import Choice1 from "./Choice1.js";
import Choice2 from "./Choice2.js";
import Choice3 from "./Choice3.js";


class ChoiceContainer extends Component {
 
  state = {
    choice: "none"
  }
  handleChoiceClick(choice) {
    this.setState({ choice })
  }
  render() {
    const style = {
      choice1: {
        backgroundColor: "#70257F"
      }, 
      choice2: {
        backgroundColor: "#257F6D"
      },
      choice3: {
        backgroundColor: "#7F1413"
      }
    }

    
    return (
      <div style={Object.assign({},
      this.state.choice==="choice1" && style.choice1, 
      this.state.choice==="choice2" && style.choice2, 
      this.state.choice==="choice3" && style.choice3)} 
        className="content-container">
        <div className="toggle-container">
          <div onClick={this.handleChoiceClick.bind(this, "choice1")} className="choice-toggle">Choice 1</div>
          <div onClick={this.handleChoiceClick.bind(this, "choice2")} className="choice-toggle">Choice 2</div>
          <div onClick={this.handleChoiceClick.bind(this, "choice3")} className="choice-toggle">Choice 3</div>
        </div>
        { this.state.choice==="choice1" && <Choice1 /> }
        { this.state.choice==="choice2" && <Choice2 /> }
        { this.state.choice==="choice3" && <Choice3 /> }
      </div>

    )
}
}
export default ChoiceContainer;