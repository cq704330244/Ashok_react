import React, { Component, Fragment } from 'react';
import SlectEffect from '../../components/EffectSelect/';
import EasyEffect from '../../components/EsayEffect';
import './index.less';
export default class ContentIndex extends Component {
  render() {
    const options = [
      { label: 'value1', value: '生效条件名称1' },
      { label: 'value2', value: '生效条件名称2' },
      { label: 'value3', value: '生效条件名称3' },
      { label: 'value4', value: '生效条件名称4' },
      { label: 'value5', value: '生效条件名称5' },
      { label: 'value6', value: '生效条件名称6' },
      { label: 'value7', value: '生效条件名称7' },
      { label: 'value8', value: '生效条件名称8' },
      { label: 'value9', value: '生效条件名称9' },
      { label: 'value10', value: '生效条件名称10' },
    ];
    const esayOption = [
      '生效条件名称1',
      '生效条件名称2',
      '生效条件名称3',
      '生效条件名称4',
      '生效条件名称5',
      '生效条件名称6',
      '生效条件名称7',
      '生效条件名称8',
      '生效条件名称9',
      '生效条件名称10',
    ];
    const modalOk = callbcakData => {
      console.log('选中的值:', callbcakData);
    };
    return (
      <Fragment>
        <div className="vvvv">
          <div>
            <div className="text"> 复杂写法（按钮）： </div>
            <SlectEffect
              config={{
                type: 'button',
                title: '选择生效条件',
                buttonText: '选择生效条件',
                listData: options,
                onenterOk: selectValue => {
                  modalOk(selectValue);
                },
              }}
            />
            <br />
            <br />
            <div className="text"> 复杂写法（文字）： </div>
            <SlectEffect
              config={{
                type: 'text',
                title: '选择生效条件',
                buttonText: '选择生效条件',
                listData: options,
                onenterOk: selectValue => {
                  modalOk(selectValue);
                },
              }}
            />
          </div>
          <div>
            <div className="text"> 简单写法（按钮）： </div>
            <EasyEffect
              config={{
                type: 'button',
                title: '选择生效条件',
                buttonText: '选择生效条件',
                listData: esayOption,
                onenterOk: selectValue => {
                  modalOk(selectValue);
                },
              }}
            />
            <br />
            <br />
            <div className="text"> 简单写法（文字）： </div>
            <EasyEffect
              config={{
                type: 'text',
                title: '选择生效条件',
                buttonText: '选择生效条件',
                listData: esayOption,
                onenterOk: selectValue => {
                  modalOk(selectValue);
                },
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
