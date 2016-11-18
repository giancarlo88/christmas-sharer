import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import ReactTransitionGroup from "react-addons-transition-group"

import Intro from "./Intro"
import GiftResponses from "./GiftResponses";
import InvitationExcuses from "./InvitationExcuses";
import SeasonsGreetings from "./SeasonsGreetings";
import Share from "./Share"

// function FirstChild(props) {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null
// }

class ChoiceContainer extends Component {
 
  state = {
    choice: "none"
  }
  handleChoiceClick(choice) {
    this.setState({ choice })
  }
  render() {
    // const style = {
    //   GiftResponses: {
    //     backgroundColor: "#70257F"
    //   }, 
    //   InvitationExcuses: {
    //     backgroundColor: "#257F6D"
    //   },
    //   SeasonsGreetings: {
    //     backgroundColor: "#7F1413"
    //   }
    // }
    
      // const classnames = function() {
      //   switch(this.state.choice){
      //     case "GiftResponses": 
      //       return "content-container-GiftResponses";
      //     case "InvitationExcuses": 
      //       return "content-container-InvitationExcuses";
      //     case "SeasonsGreetings": 
      //       return "content-container-SeasonsGreetings";
      //      case "none":
      //      default:
      //       return "content-container-start";
      //   }
      // }

    let cssClasses = `content-container ${this.state.choice}`
    return (
      <div 
        className={cssClasses}>
        { this.state.choice==="none" && <Intro className="intro" key={0}/> }
        <div className="toggle-container">
          <div onClick={this.handleChoiceClick.bind(this, "gift-responses")} className="choice-toggle">Gift Responses</div>
          <div onClick={this.handleChoiceClick.bind(this, "invitation-excuses")} className="choice-toggle">Invitation Excuses</div>
          <div onClick={this.handleChoiceClick.bind(this, "seasons-greetings")} className="choice-toggle">Seasons Greetings</div>
        </div>
         <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={500}
         >
          { this.state.choice==="gift-responses" && <GiftResponses key={1} /> }
          { this.state.choice==="invitation-excuses" && <InvitationExcuses key={2} /> }
          { this.state.choice==="seasons-greetings" && <SeasonsGreetings key={3} /> }
        </ReactCSSTransitionGroup>
      </div>

    )
}
}
export default ChoiceContainer;