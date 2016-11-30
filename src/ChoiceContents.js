import React, { Component } from "react"; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Quote from './Quote'


class ChoiceContents extends Component {
  
  render() {
    let classNames = `choice-contents ${this.props.active}`
    return (
      <div className={classNames} onClick={this.props.callAPI}>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={900}
          transitionEnterTimeout={900}
          transitionLeaveTimeout={100}>
            <Quote key={this.props.data} data={this.props.data}/>
        </ReactCSSTransitionGroup>
      </div>
    )
  }  

  }

export default ChoiceContents;