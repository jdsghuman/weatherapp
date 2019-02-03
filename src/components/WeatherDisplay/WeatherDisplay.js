import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../WeatherItem/WeatherItem';

class WeatherDisplay extends Component {

  getDateReturned = (newDate) => {
    let dt = new Date(newDate);
    let months = ["Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"];
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return `${months[dt.getMonth()]} ${dt.getDate()} ${strTime}`;
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
            <div style={{ display: 'flex', background: '#ffffff', width: '100%', marginBottom: '30px' }}>
              <div style={{ width: '40%', paddingLeft: '20px' }} key={ci.city.id}>
                <h3 style={{ fontWeight: '600', fontSize: '2rem', margin: '7px', marginLeft: '0' }} key={ci.city.id}>{ci.city.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {ci.list.map(temp => {
                    return (
                      // console.log('temp ---- ', temp)
                      <WeatherItem
                        date={this.getDateReturned(temp.dt_txt)}
                        description={temp.weather[0].description}
                        maxTemp={this.getRoundedNumber(temp.main.temp_max)}
                        minTemp={this.getRoundedNumber(temp.main.temp_min)}
                      />
                    )
                  })
                  }
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                <WeatherItem
                  description={ci.list[0].weather[0].description}
                  maxTemp={this.getRoundedNumber(ci.list[0].main.temp_max)}
                  minTemp={this.getRoundedNumber(ci.list[0].main.temp_min)}
                />
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

export default connect(mapStateToProps)(WeatherDisplay);