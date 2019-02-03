import React, { Component } from 'react';

class WeatherItem extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p style={{ marginRight: '20px', fontSize: '.9rem' }}>
          <span style={{ whiteSpace: 'nowrap', fontWeight: '700' }}>{this.props.date || 'Today'}</span> <br />
          <span style={{ textTransform: 'capitalize', fontStyle: 'italic' }}>{this.props.description}</span>
        </p>
        <p style={pStyle}>High: {this.props.maxTemp}</p>
        <p style={pStyle}>Low: {this.props.minTemp}</p>
      </div>
    )
  }
}

const pStyle = {
  marginRight: '40px',
  marginTop: '10px',
  fontWeight: '700',
  fontSize: '1.3rem'
}

const divStyle = {
  display: 'flex'
}
export default WeatherItem;