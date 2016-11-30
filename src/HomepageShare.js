import React, { Component } from "react"
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest, TiMail } from "react-icons/lib/ti"

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
    let link = 'http://www.vitaminlondon.com'
    let blurb = 'Better%20than%20a%20card%2C%20worse%20than%20a%20present%3A%20a%20digital%20gift%20that%20keeps%20on%20giving%2C%20from%20Vitamin%20London'
    
    let facebookLink = `https://www.facebook.com/sharer/sharer.php?u=www.vitaminlondon.com&picture=&title=&caption=&quote=&description=${blurb}`
    let twitterLink = `https://twitter.com/home?status=${blurb} ${link}`
    let pinterestLink = `https://pinterest.com/pin/create/button/?url=${link}&media=&description=${blurb}`
    let mailLink = `mailTo:subject=${blurb}body=Check%20it%20out%20at${link}`
    
    return(
      <div className='share-container homepage'>
        <div className="share-box">
         <div className="top-text"><p>Share the F**tive out of this</p></div>
          <div className="icon-container">
            <div className="icons">
            <a target="_blank" href={facebookLink}><TiSocialFacebook/></a>
            <a target="_blank" href={twitterLink}><TiSocialTwitter/></a>
            <a target="_blank" href={pinterestLink}><TiSocialPinterest/></a>
            <a target="_blank" href={mailLink}><TiMail/></a>
          </div>
          </div>
        </div>
      </div>

    )
  }
}

export default HomepageShare