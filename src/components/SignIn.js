import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser, clearAuthedUser } from '../actions/authedUser'
import { Redirect, withRouter } from 'react-router-dom'

class SignIn extends Component{


  state = {
    userId: null,
    toHome: false
  }

  handleSelectionUser = function(e){
    const userId = e.target.value
    this.setState(function(previousState){
      return{
        ...previousState,
        userId
      }
    })
  }

  handleSignIn = function(e){
    const { userId } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(userId))

    this.setState(function(previousState){
      return{
        ...previousState,
        toHome: true
      }
    })

  }

  componentDidMount(){
    this.props.dispatch(clearAuthedUser())
  }


  render(){

    const { userId, toHome } = this.state
    const { users } = this.props
    const selected = userId ? userId : -1
    const {from} = this.props.location.state || { from: { pathname: '/dashboard'}}

    if(toHome){
      return <Redirect to={from}/>
    }

    return(


      <div className="signin-component">

        <div className="page-header">Please Login</div>
        <div className="select-user">
        <select className="select" value={selected} onChange={(event) => this.handleSelectionUser(event)}>
        		<option value="-1" disabled>Select user...</option>
        			{Object.keys(users).map(function(key) {
        				return (
        					<option value={users[key].id} key={key}>
        						{users[key].name}
        		</option>
        				);
        			})}
        </select>
          <button onClick={(event) => this.handleSignIn(event)} >sign in</button>
        </div>

    </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return{
    users
  }
}

export default withRouter(connect(mapStateToProps)(SignIn))
