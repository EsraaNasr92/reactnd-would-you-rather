import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateUrl({ component: Component, ...rest}){
  return(
    <Route {...rest} render={function(props){
      return(
        rest.authedUser ? <Component {...props}/> :
        <Redirect to={{ pathname: '/', state: { from: props.location }} } />
      )
    }}

    />

  )
}

function mapStateToProps({ authedUser }){
  return{
    authedUser
  }
}
export default connect(mapStateToProps)(PrivateUrl)
