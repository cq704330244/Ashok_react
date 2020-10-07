import React, { Component, Fragment } from 'react';
import Layout from '../../components/layout';
import themesContenxt from './contenxt.js';

const { Provider } = themesContenxt;
export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      theme: 'dark',
    };
  }
  totleThemes = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <Fragment>
        <Provider
          value={{
            theme,
            toggleTheme: this.totleThemes,
          }}>
          <Layout />
        </Provider>
      </Fragment>
    );
  }
}
