import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Script from 'react-load-script';

class Form extends Component {
  state = {
    city: '',
    query: '',
    locality: ''
  }

  clearInput = () => {
    this.setState({
      city: '',
      query: '',
      locality: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      locality: event.target.value
    })
  }

  handleClick = () => {
    console.log('clicked');
    this.props.dispatch({ type: 'FETCH_WEATHER', payload: this.state.locality });
    this.clearInput();
  }

  handleScriptLoad = e => {
    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect = e => {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    document.getElementById('autocomplete').value = addressObject.formatted_address;
    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          locality: addressObject.formatted_address,
          city: address[0].long_name
        }
      );
    }
  }

  render() {
    return (
      <>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYqcIHpBnvZKTUX6K-mT7DY-nze22Dcms&libraries=places"
          onLoad={this.handleScriptLoad}
        /> */}
        <Input id="autocomplete" onChange={this.handleChange} value={this.state.locality} type="text" name="city" placeholder="Enter city" />
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
  font-size: 1rem;
`;

const Button = styled.button`
  background: #2aaaea;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 6px 18px;
  outline: none;
  border-radius: 3px;
  font-size: 1rem;
  letter-spacing: 1.2px;
  :hover {
    background: transparent;
    border: 1px solid #333333;
    color: #333333;
  }
`;

export default connect()(Form);