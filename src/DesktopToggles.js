import React, { Component } from 'react'


class DesktopToggles extends Component {
  // constructor(props){
  //   super(props)
  // }

  handleChoiceClick(choice){
    this.props.handleChoiceClick(choice)
  }

 render (){
   return(<div className="toggle-container" key={1}>
            <div onClick={this.handleChoiceClick.bind(this,"gift-responses")} className="choice-toggle gift-responses"><h2>Gift Responses</h2></div>
            <div onClick={this.handleChoiceClick.bind(this, "invitation-excuses")} className="choice-toggle invitation-excuses"><h2>Invitation Excuses</h2></div>
            <div onClick={this.handleChoiceClick.bind(this, "seasons-greetings")} className="choice-toggle seasons-greetings"><h2>Seasons Greetings</h2></div>
          </div>
   )

}
}

export default DesktopToggles
