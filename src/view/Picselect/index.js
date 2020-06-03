import React, { Component, Fragment } from 'react';
import Picomponet from '../../components/Picselect';
import { picList } from '../../mock/publicDate';
export default class PicselectPage extends Component {
  picchange = value => console.log(value);
  render() {
    return (
      <Fragment>
        <Picomponet
          picList={picList}
          onChange={value => {
            this.picchange(value);
          }}
        />
      </Fragment>
    );
  }
}
