import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../WeatherItem/WeatherItem';
import './WeatherDisplay.css';

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
        {this.props.cityList.reverse().map(ci => {
          return (
            <div key={ci.city.id} className="city__container">
              <div style={{ width: '40%', paddingLeft: '20px' }}>
                <h3 className="city__title">{ci.city.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {ci.list.map(temp => {
                    return (
                      <WeatherItem
                        key={temp.dt}
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
              <div className="item__container">
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