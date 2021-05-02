import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
//import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Answer from './Answer'
import SignIn from './SignIn'
import PrivateUrl from './PrivateUrl'

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

              {/*   <Nav />
                {this.props.loading === true
                    ? null
                    : <div>
                        <Route path='/' exact component={SignIn} />
                        <Route path='/Dashboard' exact component={Dashboard} />
                        <Route path='/Leaderboard' exact component={Leaderboard} />
                        <Route path='/AddQuestion' exact component={AddQuestion} />
                        <Route path='/question/:id' exact component={Answer} />
                      </div>
                }*/}

                <Route path='/' exact component={SignIn} />
                <PrivateUrl path='/Dashboard' exact component={Dashboard} />
                <PrivateUrl path='/Leaderboard' exact component={Leaderboard} />
                <PrivateUrl path='/AddQuestion' exact component={AddQuestion} />
                <PrivateUrl path='/question/:id' exact component={Answer} />

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
