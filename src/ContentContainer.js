import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import ReactTransitionGroup from "react-addons-transition-group"

import Intro from "./Intro"
import DesktopToggles from "./DesktopToggles"
//import MobileSlider from "./MobileSlider"
import GiftResponses from "./GiftResponses";
import InvitationExcuses from "./InvitationExcuses";
import SeasonsGreetings from "./SeasonsGreetings";
import HomepageShare from "./HomepageShare"

// function FirstChild(props) {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null
// }

class ContentContainer extends Component {
  
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
          <Intro className="intro" key={0}/>
          <DesktopToggles handleChoiceClick={this.handleChoiceClick.bind(this)}/>
          <GiftResponses active={this.state.choice==="gift-responses"} />
          <InvitationExcuses active={this.state.choice==="invitation-excuses"} />
          <SeasonsGreetings active={this.state.choice==="seasons-greetings" } />
         <HomepageShare active={this.state.choice} />
      </div>
    )
}
}
export default ContentContainer;