import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import SearchInput from '../SearchInput/SearchInput';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';


class App extends Component {
  ga = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCYqcIHpBnvZKTUX6K-mT7DY-nze22Dcms&libraries=places'
  render() {
    return (
      <div className="App">
        <Wrapper>
          <SearchInput ga={this.ga} />
          <WeatherDisplay ga={this.ga} />
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
