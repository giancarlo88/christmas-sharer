import React, { Component } from "react"; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Quote from './Quote'

import Shake from 'shake.js'


class ChoiceContents extends Component {
  handleShake() {
    const shakeEvent = new Shake({
      timeout: 500,
      threshold: 5
       
    })
    shakeEvent.start()
    window.addEventListener('shake', this.props.callAPI, false)
  }
   componentWillMount(){
    this.handleShake();
  }
  render() {
    let classNames = `choice-contents ${this.props.active}`
    return (
      <div className={classNames} onClick={this.props.callAPI}>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}>
            <Quote key={this.props.data} data={this.props.data}/>
        </ReactCSSTransitionGroup>
      </div>
    )
  }  

  }

export default ChoiceContents;