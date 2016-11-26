import React, { Component } from "react"
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest, TiMail } from "react-icons/lib/ti"

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
    let facebookLink = `https://www.facebook.com/sharer/sharer.php?u=www.google.com&picture=&title=&caption=&quote=&description=${this.state.quote}`
    let twitterLink = `https://twitter.com/home?status=${this.state.quote}`
    let pinterestLink = `https://pinterest.com/pin/create/button/?url=&media=&description=${this.state.quote}`
    let mailLink = `mailTo:body=${this.state.quote}`
    return(
      <div className='share-container share-quote'>
        <div className="share-box">
         <div className="top-text"><p>Shake that festive mouse of yours to get something new</p></div>
          <div className="icon-container">
          <div className=""><p>Has someone come to mind?<br/>Or is this you all over?</p></div>
            <a target="_blank" href={facebookLink}><TiSocialFacebook/></a>
            <a target="_blank" href={twitterLink}><TiSocialTwitter/></a>
            <a target="_blank" href={pinterestLink}><TiSocialPinterest/></a>
            <a target="_blank" href={mailLink}><TiMail/></a>
          </div>
        </div>
      </div>

    )
  }
}

export default Share