import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

import './style/index.less';

const pic1 = require('../../assets/pic1.jpg');
const pic2 = require('../../assets/pic2.jpg');
const pic3 = require('../../assets/pic3.jpg');

function SelectPic({ picList, onChange }) {
  const [checkde, setCheckde] = useState(false);
  const [picNumber, setpicNumber] = useState(checkde ? picList.length : 0);
  const [value, setvalue] = useState([]);

  useEffect(() => {
    value.length === picList.length ? setCheckde(true) : setCheckde(false);
  }, [value.length, picList.length]);

  let listData = picList;

  function allChange() {
    if (checkde) {
      setCheckde(false);
      onChange([]);
      setvalue([]);
      setpicNumber(0);
    } else {
      setCheckde(true);
      setpicNumber(picList.length);
      let ids = [];
      picList.map(e => ids.push(e.id));
      onChange(ids);
      setvalue(ids);
    }
  }
  function popPic(id) {
    if (id === 1) {
      return pic1;
    }
    if (id === 2) {
      return pic2;
    }
    if (id === 3) {
      return pic3;
    }
  }
  function eachChange(i) {
    if (value.includes(i)) {
      value.splice(
        value.findIndex(a => a === i),
        1
      );
    } else {
      value.push(i);
    }
    onChange(value);
    setpicNumber(value.length);
    setvalue(value);
  }
  return (
    <div className="pic-container">
      <div className="header">
        <Checkbox
          checked={checkde}
          onChange={() => {
            allChange();
          }}
        />
        <span
          style={{ marginLeft: '10px' }}>{`已经选择了${picNumber}个文件`}</span>
      </div>
      <div className="pic-wrap">
        {Array.isArray(listData) &&
          listData.length > 0 &&
          listData.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                <div className="title">
                  <Checkbox
                    checked={value.includes(item.id)}
                    onChange={() => {
                      eachChange(item.id);
                    }}
                    id={item.name}
                  />
                </div>
                <label htmlFor={item.name}>
                  <img src={popPic(item.id)} alt="" />
                </label>
                <div className="textfooter">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default SelectPic;
