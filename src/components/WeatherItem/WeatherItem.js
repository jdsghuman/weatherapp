import React, { Component } from 'react';
import './WeatherItem.css';

class WeatherItem extends Component {
  render() {
    return (
      <div className={this.props.classList}>
        <p style={{ paddingLeft: '20px', marginRight: '20px', fontSize: '.9rem', whiteSpace: 'nowrap', height: '40px' }}>
          {/* Show 'Current' text if date is not available */}
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
  marginRight: '25px',
  marginTop: '10px',
  fontWeight: '700',
  fontSize: '1.2rem',
  whiteSpace: 'nowrap'
}

export default WeatherItem;