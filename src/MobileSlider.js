import React, { Component } from "react"
import Slider from 'tbg-react-slider'


class MobileSlider extends Component {
  handleChoiceClick(choice) {
    this.props.handleChoiceClick(choice)
  }
  render() {
    return (
      <Slider autoplay={false}>
              <div onClick={this.handleChoiceClick.bind(this,"gift-responses")} className="choice-toggle gift-responses shake"><h2>Gift Responses</h2></div>
              <div onClick={this.handleChoiceClick.bind(this, "seasons-greetings")} className="choice-toggle seasons-greetings shake"><h2>Seasons Greetings</h2></div>
              <div onClick={this.handleChoiceClick.bind(this, "invitation-excuses")} className="choice-toggle invitation-excuses shake"><h2>Invitation Excuses</h2></div>
      </Slider>
    )
  }
}

export default MobileSlider
 