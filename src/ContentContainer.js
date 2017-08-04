import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import ReactTransitionGroup from "react-addons-transition-group"

import Intro from "./Intro"
import DesktopToggles from "./DesktopToggles"
import MobileSlider from "./MobileSlider"
import GiftResponses from "./GiftResponses";
import InvitationExcuses from "./InvitationExcuses";
import SeasonsGreetings from "./SeasonsGreetings";
import HomepageShare from "./HomepageShare"
import VitaminFooter from './VitaminFooter'


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
    let cssClasses = `content-container ${this.state.choice}`
    return (
      <div 
        className={cssClasses}>
          <Intro className="intro" key={0}/>
          {screen.width > 480 && <DesktopToggles handleChoiceClick={this.handleChoiceClick.bind(this)}/> }
          {screen.width <= 480 && <MobileSlider handleChoiceClick={this.handleChoiceClick.bind(this)} /> }
          <GiftResponses active={this.state.choice==="gift-responses"} />
          <InvitationExcuses active={this.state.choice==="invitation-excuses"} />
          <SeasonsGreetings active={this.state.choice==="seasons-greetings" } />
         <HomepageShare active={this.state.choice} />
         <VitaminFooter/>
      </div>
    )
}
}
export default ContentContainer;