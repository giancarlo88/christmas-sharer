import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTransitionGroup from "react-addons-transition-group"
import Choice1 from "./Choice1.js";
import Choice2 from "./Choice2.js";
import Choice3 from "./Choice3.js";

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null
}

class ChoiceContainer extends Component {
 
  state = {
    choice: "none"
  }
  handleChoiceClick(choice) {
    this.setState({ choice })
  }
  render() {
    // const style = {
    //   choice1: {
    //     backgroundColor: "#70257F"
    //   }, 
    //   choice2: {
    //     backgroundColor: "#257F6D"
    //   },
    //   choice3: {
    //     backgroundColor: "#7F1413"
    //   }
    // }
    
      // const classnames = function() {
      //   switch(this.state.choice){
      //     case "choice1": 
      //       return "content-container-choice1";
      //     case "choice2": 
      //       return "content-container-choice2";
      //     case "choice3": 
      //       return "content-container-choice3";
      //      case "none":
      //      default:
      //       return "content-container-start";
      //   }
      // }

    let cssClasses = `content-container ${this.state.choice}`
    return (
      <div 
        className={cssClasses}>
        <div className="toggle-container">
          <div onClick={this.handleChoiceClick.bind(this, "choice1")} className="choice-toggle">Choice 1</div>
          <div onClick={this.handleChoiceClick.bind(this, "choice2")} className="choice-toggle">Choice 2</div>
          <div onClick={this.handleChoiceClick.bind(this, "choice3")} className="choice-toggle">Choice 3</div>
        </div>
         <ReactTransitionGroup component={FirstChild}>
          { this.state.choice==="choice1" && <Choice1 key={1} /> }
          { this.state.choice==="choice2" && <Choice2 key={2} /> }
          { this.state.choice==="choice3" && <Choice3 key={3} /> }
        </ReactTransitionGroup>
      </div>

    )
}
}
export default ChoiceContainer;