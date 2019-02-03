import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import SearchInput from '../SearchInput/SearchInput';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Wrapper>
          <SearchInput />
          <WeatherDisplay />
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1200px;
`;

export default App;
