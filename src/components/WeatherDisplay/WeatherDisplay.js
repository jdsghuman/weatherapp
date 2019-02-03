import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDisplay extends Component {

  getDateReturned = (newDate) => {
    let dt = new Date(newDate);
    var months = ["January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"];
    return `${months[dt.getMonth()]} ${dt.getDate()}`;
  }

  getRoundedNumber = (num) => {
    let roundedNum = Math.round(num);
    return roundedNum;
  }

  render() {
    console.log('city list: ', this.props.cityList)
    return (
      <ul style={{ paddingLeft: '0' }}>
        {this.props.cityList.map(ci => {
          return (
            <div style={{display: 'flex', background: '#ffffff', width: '100%' }}>
              <div style={{width: '40%'}} key={ci.city.id}>
              <h3 style={{ fontWeight: '600', fontSize: '2rem', margin: '7px' }} key={ci.city.id}>{ci.city.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {ci.list.map(temp => {
                    return (
                      <p>temp</p>
                    )
                  })
                  }
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%'}}>
                <p style={{textTransform: 'capitalize', marginRight: '40px', fontSize: '.9rem'}}><span style={{fontWeight: '700'}}>Today</span> <br/><span style={{fontStyle: 'italic'}}>{ci.list[0].weather[0].description}</span></p>
                <p style={pStyle}>High: {this.getRoundedNumber(ci.list[0].main.temp_max)}</p>
                <p style={pStyle}>Low: {this.getRoundedNumber(ci.list[0].main.temp_min)}</p>
              </div>
            </div>
          )
        })}
        {/* {JSON.stringify(this.props.cityList)} */}
      </ul>
    )
  }
}

const mapStateToProps = store => ({
  cityList: store.weather
});

const pStyle = {
  marginRight: '40px',
  fontWeight: '700',
  fontSize: '1.3rem'
}

export default connect(mapStateToProps)(WeatherDisplay);