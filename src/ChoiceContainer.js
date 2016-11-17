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
    return (
      <div>
        <div onClick={this.handleChoiceClick.bind(this, "choice1")} className="choice-toggle">Choice 1</div>
        <div onClick={this.handleChoiceClick.bind(this, "choice2")} className="choice-toggle">Choice 2</div>
        <div onClick={this.handleChoiceClick.bind(this, "choice3")} className="choice-toggle">Choice 3</div>
        { this.state.choice==="choice1" && <Choice1 /> }
        { this.state.choice==="choice2" && <Choice2 /> }
        { this.state.choice==="choice3" && <Choice3 /> }
      </div>

    )
}
}
export default ChoiceContainer;