import React, { Component } from "react"
import { TiSocialFacebook, TiSocialTwitter, TiMail } from "react-icons/lib/ti"

class HomepageShare extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: props.active
    }
  }
componentWillReceiveProps(props){
  this.setState({
    active: props.active
  })
}
  
  render (){
    let link = 'http://christmas.vitaminlondon.com/16'
    let blurb = 'Better%20than%20a%20card%2C%20worse%20than%20a%20present%20%E2%80%94%20a%20digital%20gift%20that%20keeps%20on%20giving.%20%0AFrom%20Vitamin%20London'
    let shortBlurb = 'Better%20than%20a%20card%2C%20worse%20than%20a%20present%20%E2%80%94%20a%20gift%20that%20keeps%20on%20giving.'

    let facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${link}&title=&caption=&quote=&description=${blurb}`
    let twitterLink = `https://twitter.com/intent/tweet?text=${shortBlurb}&url=${link}&via=vitaminlondon&hashtags=ohohoh`
    let mailLink = `mailTo:?subject=${blurb}&body=Check%20it%20out%20at%20${link}`
    
    return(
      <div className='share-container homepage'>
        <div className="share-box">
         <div className="top-text"><p>Share the F**tive out of this</p></div>
          <div className="icon-container">
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

export default HomepageShare