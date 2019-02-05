import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../WeatherItem/WeatherItem';
import './WeatherDisplay.css';
import Map from '../Map/Map';
import styled from 'styled-components';
import moment from 'moment';


class WeatherDisplay extends Component {

  // Format date display
  getDateReturned = (newDate) => {
    let dt = new Date(newDate);
    // let dt = parseInt(dta);
    let months = ["Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"];
    let hours = dt.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strTime = `${hours}${ampm}`;
    let monthNum = moment(dt).format('M');
    console.log('dt', moment(dt).format('MM'))
    return `${months[monthNum]} ${moment(dt).format('Do')} ${strTime}`;
  }

  // Round weather to integer
  getRoundedNumber = (num) => {
    let roundedNum = Math.round(num);
    return roundedNum;
  }

  removeCity = (cityId) => {
    this.props.dispatch({ type: 'REMOVE_CITY', payload: cityId });
  }

  render() {
    return (
      <ul style={{ paddingLeft: '0' }}>
        {/* Display searched cities */}
        {this.props.cityList.map((ci, i) => {
          return (
            <div key={i} className="city__container">
              <div>
                <h3 className="city__title">{ci.city.name}</h3>
                <Button onClick={() => this.removeCity(ci.city.id)}>Remove</Button> 
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


const Button = styled.button`
  background: transparent;
  color: #333333;
  cursor: pointer;
  border: none;
  padding: 5px 15px;
  outline: none;
  border: 1px solid #333333;
  border-radius: 3px;
  font-size: .8rem;
  letter-spacing: 1.2px;
  margin-left: 5px;
  display: inline-block;
  transform: translateY(-5px);
  :hover {
    background: #2aaaea;
    border: none;
    color: #ffffff;
  }
`;
export default connect(mapStateToProps)(WeatherDisplay);