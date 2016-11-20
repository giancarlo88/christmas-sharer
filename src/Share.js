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
          {this.state.active === "none" && <p>Share the F**tive out of this</p> }
          {this.state.active !== "none" && <p>Shake that festive mouse of yours to get something new</p> }
          <div className="icon-container">
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