import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='app-component'>
                <Nav />
                {this.props.loading === true
                    ? null
                    : <div>
                        <Route path='/' exact component={Dashboard} />
                        <Route path='/Leaderboard' exact component={Leaderboard} />
                        <Route path='/AddQuestion' exact component={AddQuestion} />
                      </div>
                }
            </div>
          </Fragment>
        </Router>




    )
  }
}

function mapStateToProps({ authedUser }){
  return{
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
