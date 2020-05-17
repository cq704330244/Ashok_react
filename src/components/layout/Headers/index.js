import React from 'react';
import './index.less';
import utils from '../../../utils/formate';
import axios from '../../../axios';
export default class Headers extends React.Component {
  state = { systime: '', weather: {}, daypic: '', weat: '' };
  componentWillMount() {
    this.setState({
      userName: '河畔一角',
    });
    setInterval(() => {
      let systime = utils.formateDate(new Date().getTime());
      this.setState({
        systime,
      });
    }, 1000);
    this.getWeather();
  }
  getWeather() {
    let self = this;
    const location = '杭州';
    axios
      .jsonp({
        url:
          'http://api.map.baidu.com/telematics/v3/weather?location=' +
          encodeURIComponent(location) +
          '&output=json&ak=ohA7QHfg0BBrpiY4kyuIAAsD',
      })
      .then(res => {
        let weatherdata = res[0].weather_data[0];
        self.setState({
          weather: weatherdata,
        });
      });
  }
  render() {
    const { weather, userName, systime } = this.state;
    return (
      <div className="header">
        <div className="header-top">
          <span> 欢迎,{userName} </span>
          <a href="/">退出</a>
        </div>
        <div className="breadcrumb">
          <div className="breadcrumb-title">首页</div>
          <div className="weather">
            <span className="date">{systime}</span>
            <span className="weather-img">
              <img src={weather.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detial">{weather.weather}</span>
          </div>
        </div>
      </div>
    );
  }
}
