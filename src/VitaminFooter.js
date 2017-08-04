import React, { Component } from 'react' 


class VitaminFooter extends Component {
  state = {
    extended: false
  }
  handleClick() {
    this.setState({
      extended: !this.state.extended
    })
  }
  render() { 
    let classNames = `footer-container ${this.state.extended ? 'extended' : 'lowered'}`
    return(
    <div className={classNames}>
        <div className='top'>
          <div className='logo' onClick={this.handleClick.bind(this)}/>
          <div><a href='http://www.vitaminlondon.com'>Handcrafted by Vitamin London</a></div>
        </div>
        <div className='signatures'>
          <div className='signature-container'>
            <div className='signature-image bl'/>
            <div className='name'>
              <h5>Bob Lloyd</h5>
              <h6>Digital Designer</h6>
            </div>
          </div>  
          <div className='signature-container'>
            <div className='signature-image gg'/>
            <div className='name'>
              <h5>Giancarlo Galliani</h5>
              <h6>Front-End Developer</h6>
            </div>
          </div>  
        </div>
    </div>
    )
  }
}

export default VitaminFooter


