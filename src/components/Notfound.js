import React, { Component } from 'react'
import Nav from './Nav'

class Notfound extends Component {
  render() {
    return(
      <div className="dashboard">
        <Nav />
        <h3 className='page-header'>404 page not found</h3>
      </div>
    )
  }
}
export default Notfound
