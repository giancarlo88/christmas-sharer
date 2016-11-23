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
    active: props.active
  })
}
  render (){
    let classNames = `share-container ${this.state.active==="none" ? "homepage" : "share-quote"}`
    return(
      <div className={classNames}>
        <div className="share-box">
          {this.state.active === "none" && <div className="top-text"><p>Share the F**tive out of this</p></div> }
          {this.state.active !== "none" && <div className="top-text"><p>Shake that festive mouse of yours to get something new</p></div> }
          <div className="icon-container">
          {this.state.active !== "none" && <div className=""><p>Has someone come to mind?<br/>Or is this you all over?</p></div>}
            <TiSocialFacebook/>
            <TiSocialTwitter/>
            <TiSocialPinterest/>
            <TiMail/>
          </div>
        </div>
      </div>

    )
  }
}

export default Share