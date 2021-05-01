import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
//import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      {/*{this.props.loading === true
        ? null
        :<Dashboard />
      } */}
      {/* <Dashboard /> */}
      {/* */}<AddQuestion />
      </div>
    )
  }
}

function mapStateToProps({ authedUser }){
  return{
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
