import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'

class AddQuestion extends Component {

  // for value from inputs
  state = {
    optionOneText:'',
		optionTwoText:'',
    toHome: false
	};

	handleInputChange = (event, type) => {
		const value = event.target.value;

		this.setState((state) => {
			return type === 'option_one' ? {...state, optionOneText: value} : {...state, optionTwoText: value}
		});
	}

	handleSubmit = (event) => {
    	event.preventDefault();

    	const { optionOneText, optionTwoText} = this.state
      const { dispatch } = this.props

      // to store data from input
    	dispatch(handleAddQuestion(
      		optionOneText,
      		optionTwoText
    	))

    	this.setState({
        	optionOneText:'',
			    optionTwoText:'',
          //toHome: id ? false : true,
          toHome: true
      	})
  	}

  	render() {

      const { toHome } = this.state
      if(toHome === true){
        return <Redirect to='/dashboard' />
      }

  		return (
  			<div className="dashboard">
          <Nav />
          <h3 className='page-header'>Create New Question</h3>

  				<form onSubmit={this.handleSubmit} className="addQuestions">
  					<div className="would-you">Would you rather...</div>

  					<input
  						name="optionOneText"
  						type="text"
  						placeholder="Enter Option One Text Here"
  						value={this.state.optionOneText}
  						onChange={(event) => this.handleInputChange(event, 'option_one')}
            />

            <p>Or</p>

  					<input
  						name="optionTwoText"
  						type="text"
  						placeholder="Enter Option Two Text Here"
  						value={this.state.optionTwoText}
  						onChange={(event) => this.handleInputChange(event, 'option_two')}
              />

            <br />
  					<button type="submit">Submit</button>

  				</form>
  			</div>
    		)
  	}
	}
export default connect()(AddQuestion)
