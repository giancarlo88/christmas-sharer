import React, { Component } from 'react'

class Quote extends Component {
  componentWillUnmount(){
    console.log("unmount")
  }
  render() {
    return (
      <p>{this.props.data}</p>
    )
  }
}

export default Quote