import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  state = {
    searchString: ''
  }

  handleChange = (event) => {
    this.setState({
      searchString: event.target.value
    })
  }

  handleClick = () => {
    console.log('clicked');
    this.props.dispatch({ type: 'FETCH_WEATHER', payload: this.state.searchString });
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange} type="text" name="city" placeholder="Enter city" />
        <button onClick={this.handleClick}>Add City</button>
      </>
    )
  }
}

export default connect()(Form);