import React, { Component } from "react"
import Carousel from 'nuka-carousel'


class MobileSlider extends Component {
  handleChoiceClick(choice) {
    this.props.handleChoiceClick(choice)
  }

 
  render() {
let Decorators = [
  {
  component: React.createClass({
    render() {
      return (
        <button style={{fontSize: '30px'}}
          onClick={this.props.previousSlide}>
           ⟨
        </button>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 30,
  }
},
{
  component: React.createClass({
    render() {
      return (
        <button style={{fontSize: '30px'}}
          onClick={this.props.nextSlide}>
           ⟩
        </button>
      )
    }
  }),
  position: 'CenterRight',
  style: {
    padding: 30,
  }
},


];
    return (
    
  <div className="toggle-container">
    <div className="toggle-button-container">
      <Carousel decorators={Decorators}>
        <div onClick={this.handleChoiceClick.bind(this,"gift-responses")} style={{margin: '0 auto'}} className="choice-toggle gift-responses shake"><h2>Gift Responses</h2></div>
        <div onClick={this.handleChoiceClick.bind(this, "seasons-greetings")} style={{margin: '0 auto'}} className="choice-toggle seasons-greetings shake"><h2>Seasons Greetings</h2></div>
        <div onClick={this.handleChoiceClick.bind(this, "invitation-excuses")} style={{margin: '0 auto'}} className="choice-toggle invitation-excuses shake"><h2>Invitation Excuses</h2></div>
      </Carousel>
    </div>
  </div>
    )
  }
}

export default MobileSlider
 