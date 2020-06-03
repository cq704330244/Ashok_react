import React, { Component, Fragment } from 'react';
import ScollPage from '../../components/Listscroll';
import { listData } from '../../mock/publicDate';
export default class ListscrollPage extends Component {
  render() {
    return (
      <Fragment>
        <ScollPage allData={listData}></ScollPage>
      </Fragment>
    );
  }
}
