import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'

import './style/index.less'

function SelectPic({ picList, onChange }) {
  const [checkde, setCheckde] = useState(false)
  const [picNumber, setpicNumber] = useState(checkde ? picList.length : 0)
  const [value, setvalue] = useState([])

  useEffect(() => {
    value.length === picList.length ? setCheckde(true) : setCheckde(false)
  }, [value.length, picList.length])

  let listData = picList

  function allChange() {
    if (checkde) {
      setCheckde(false)
      onChange([])
      setvalue([])
      setpicNumber(0)
    } else {
      setCheckde(true)
      setpicNumber(picList.length)
      let ids = []
      picList.map((e) => ids.push(e.id))
      onChange(ids)
      setvalue(ids)
    }
  }
  function eachChange(i) {
    if (value.includes(i)) {
      value.splice(
        value.findIndex((a) => a === i),
        1
      )
    } else {
      value.push(i)
    }
    onChange(value)
    setpicNumber(value.length)
    setvalue(value)
  }
  return (
    <div className="pic-container">
      <div className="header">
        <Checkbox
          checked={checkde}
          onChange={() => {
            allChange()
          }}
        />
        <span
          style={{ marginLeft: '10px' }}
        >{`已经选择了${picNumber}个文件`}</span>
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
                      eachChange(item.id)
                    }}
                    id={item.name}
                  />
                </div>
                <label htmlFor={item.name}>
                  <img src={item.url} alt="" />
                </label>
                <div className="footer">{item.name}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default SelectPic
