import React, { Component } from 'react';
import styled from 'styled-components';
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
        <Input onChange={this.handleChange} type="text" name="city" placeholder="Enter city" />
        <Button onClick={this.handleClick}>Add City</Button>
      </>
    )
  }
}

const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #aaaaaa;
  margin-right: 12px;
  width: 200px;
  height: 30px;
  padding: 5px;
  outline: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: #2aaaea;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 7px 18px;
  outline: none;
  border-radius: 3px;
  font-size: .8rem;
  letter-spacing: 1.2px;
  :hover {
    background: #64beea;
  }
`;

export default connect()(Form);