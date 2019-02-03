import React, { Component } from 'react';

class WeatherItem extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p style={{  paddingLeft: '20px', marginRight: '20px', fontSize: '.9rem', whiteSpace: 'nowrap' }}>
          <span style={{ whiteSpace: 'nowrap', fontWeight: '700' }}>{this.props.date || 'Current'}</span> <br />
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
  display: 'flex',
  borderBottom: '2px solid #eaedf2'
}
export default WeatherItem;