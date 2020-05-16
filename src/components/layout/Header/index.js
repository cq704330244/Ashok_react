import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import utils from '../../../utils/formate';
import axios from '../../../axios';
export default class Header extends React.Component {
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
        console.log(weatherdata);
        self.setState({
          weather: weatherdata,
        });
      });
  }
  render() {
    const { weather, userName, systime } = this.state;
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span> 欢迎,{userName} </span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{systime}</span>
            <span className="weather-img">
              <img src={weather.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detial">{weather.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
