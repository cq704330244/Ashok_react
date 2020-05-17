import React, { Component } from "react";
import "./style/index.less";
export default class Scrolist extends Component {
  constructor(props) {
    super();
    this.state = {
      defaultTop: 50
    };
  }
  handles() {
    const increment = 1;
    this.setState(function (state, props) {
      return {
        defaultTop: state.defaultTop - increment
      };
    });
    const { defaultTop } = this.state;
    let listHeight = this.refDom.clientHeight;
    let bottomHeight = listHeight - 280;
    if (bottomHeight === -defaultTop) {
      this.setState(function (state, props) {
        return {
          defaultTop: 50
        };
      });
    }
  }
  startTimer() {
    this.timer = setInterval(this.handles.bind(this), 30);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    const that = this;
    this.startTimer();
    document
      .getElementById("wrapper")
      .addEventListener("mouseenter", function () {
        that.stopTimer();
      });
    document
      .getElementById("wrapper")
      .addEventListener("mouseleave", function () {
        that.startTimer();
      });
  }
  componentWillUnmount() {
    const that = this;
    document
      .getElementById("wrapper")
      .removeEventListener("mouseenter", function () {
        that.stopTimer();
      });
    document
      .getElementById("wrapper")
      .removeEventListener("mouseleave", function () {
        that.startTimer();
      });
    clearInterval(this.timer);
  }
  render() {
    const { defaultTop } = this.state;
    const { allData } = this.props;
    return (
      <div>
        <div
          className="wrapper"
          id="wrapper"
          style={{ width: "850px", height: "300px" }}
        >
          <div className="more-positon">
            最新职位
            <a className="clickMore" href="/">
              更多
            </a>
          </div>
          <div
            className="list-wrap"
            ref={(ref) => {
              this.refDom = ref;
            }}
            style={{ top: defaultTop + "px" }}
          >
            {allData.map((item, index) => {
              return (
                <div className="list-item" key={index}>
                  <div className="first">{item.duty}</div>
                  <div className="city">{item.city}</div>
                  <div className="min">{item.min}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
