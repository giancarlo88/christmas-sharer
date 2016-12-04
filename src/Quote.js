import React, { Component } from 'react'

class Quote extends Component {
  componentWillUnmount(){
  }
  render() {
    return (
      <p>{this.props.data}</p>
    )
  }
}

export default Quote