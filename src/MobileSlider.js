import React, { Component } from "react"
import Slider from 'tbg-react-slider'


class MobileSlider extends Component {
  handleChoiceClick(choice) {
    this.props.handleChoiceClick(choice)
  }
  render() {
    return (
      <Slider autoplay={false} initialSlide={1}>
        <div onClick={this.handleChoiceClick.bind(this, "gift-responses")} className="choice-toggle">Gift Responses</div>
        <div onClick={this.handleChoiceClick.bind(this, "invitation-excuses")} className="choice-toggle">Invitation Excuses</div>
        <div onClick={this.handleChoiceClick.bind(this, "seasons-greetings")} className="choice-toggle">Seasons Greetings</div>
      </Slider>
    )
  }
}

export default MobileSlider
 