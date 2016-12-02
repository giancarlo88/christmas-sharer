import React, { Component } from "react"
import { TiSocialFacebook, TiSocialTwitter, TiMail } from "react-icons/lib/ti"

class Share extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: props.active
    }
  }
componentWillReceiveProps(props){
  this.setState({
    active: props.active,
    quote: props.quote
  })
}
  render (){
    let quote = encodeURIComponent(this.state.quote)
    let fromText = encodeURIComponent('You can thank us later, from Vitamin London')
    let link = 'www.vitaminlondon.com'

    let facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${link}&picture=&title=&caption=&quote=&description=${quote}%0A${fromText}`
    let twitterLink = `https://twitter.com/home?status=${quote}%0A${fromText} ${link}`
    let mailLink = `mailTo:body=${quote}%0A${fromText}%0A${link}`
    
    let classNames = `share-box ${this.props.selected}`
    return(
      <div className='share-container share-quote'>
        <div className={classNames}>
         <div className="top-text">
          {screen.width > 480 && <p>Click the festive speech bubble to get something new</p>}
          {screen.width <= 480 && <p>Shake that seasonal screen to get something new</p>}
        </div>
          <div className="icon-container">
          <div className=""><p>Has someone come to mind?<br/>Or is this you all over?</p></div>
            <div className="icons">
            <a target="_blank" href={facebookLink}><TiSocialFacebook/></a>
            <a target="_blank" href={twitterLink}><TiSocialTwitter/></a>
            <a target="_blank" className="mail-icon" href={mailLink}><TiMail/></a>
          </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Share