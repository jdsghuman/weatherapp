import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../WeatherItem/WeatherItem';
import './WeatherDisplay.css';
import Map from '../Map/Map';

class WeatherDisplay extends Component {

  // Format date display
  getDateReturned = (newDate) => {
    let dt = new Date(newDate);
    let months = ["Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"];
    let hours = dt.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strTime = `${hours}${ampm}`;
    let monthNum = dt.getMonth();
    return `${months[monthNum]} ${dt.getDate()} ${strTime}`;
  }

  // Round weather to integer
  getRoundedNumber = (num) => {
    let roundedNum = Math.round(num);
    return roundedNum;
  }

  render() {
    return (
      <ul style={{ paddingLeft: '0' }}>
        {/* Display searched cities */}
        {this.props.cityList.reverse().map(ci => {
          return (
            <div key={ci.city.id} className="city__container">
              <div>
                <h3 className="city__title">{ci.city.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Forecast display */}
                  {ci.list.map(temp => {
                    return (
                      <WeatherItem
                        classList="weather-item__container container__border"
                        key={temp.dt}
                        // Display date
                        date={this.getDateReturned(temp.dt_txt)}
                        // Display Description
                        description={temp.weather[0].description}
                        // Display Max Temp
                        maxTemp={this.getRoundedNumber(temp.main.temp_max)}
                        // Display Min Temp
                        minTemp={this.getRoundedNumber(temp.main.temp_min)}
                      />
                    )
                  })
                  }
                </div>
              </div>
              {/* Current Weather Display */}
              <div className="item__container">
                <WeatherItem
                  classList="weather-item__container"
                  // Display Description
                  description={ci.list[0].weather[0].description}
                  // Display Max Temp
                  maxTemp={this.getRoundedNumber(ci.list[0].main.temp_max)}
                  // Display Min Temp
                  minTemp={this.getRoundedNumber(ci.list[0].main.temp_min)}
                />
                <div className="map__container">
                  <Map 
                    lat={ci.city.coord.lat}
                    lon={ci.city.coord.lon}
                  />
                </div>
              </div>
            </div>
          )
        })}
        
      </ul>
    )
  }
}

const mapStateToProps = store => ({
  cityList: store.weather
});

export default connect(mapStateToProps)(WeatherDisplay);