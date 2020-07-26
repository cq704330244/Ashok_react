import React, { useState } from 'react';
import { Button, Modal, Input, Checkbox } from 'antd';

import './index.less';

const CheckboxGroup = Checkbox.Group;

const initoption = [];

export default props => {
  const { type, title, buttonText, listData, onenterOk } = props.config;
  const [visible, setVisible] = useState(false);
  const [arrData, setArrData] = useState(listData);

  const [checkGroup, setCheckGroup] = useState({
    checkedList: initoption,
    indeterminate: true,
    checkAll: false,
  });

  const openModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    onenterOk(checkGroup.checkedList);
    setCheckGroup({
      ...checkGroup,
      checkedList: [],
    });
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const onCheckchange = checkvalue => {
    setCheckGroup({
      checkedList: checkvalue,
      indeterminate: !!checkvalue.length && checkvalue.length < arrData.length,
      checkAll: checkvalue.length === arrData.length,
    });
  };
  const inputOnchange = value => {
    let Arr = listData.filter(items => {
      return items.indexOf(value) !== -1;
    });
    setArrData(Arr);
  };

  const deleteTag = value => {
    let deleteArr = checkGroup.checkedList.filter(items => {
      return items !== value;
    });
    setCheckGroup({
      ...checkGroup,
      checkedList: deleteArr,
    });
  };
  return (
    <div>
      {type === 'button' && (
        <Button type="primary" onClick={openModal}>
          {buttonText}
        </Button>
      )}
      {type === 'text' && (
        <div className="effect_text" onClick={openModal}>
          {buttonText}
        </div>
      )}
      <Modal
        title={title}
        visible={visible}
        centered
        getContainer={false}
        cancelText="取消"
        okText="确定"
        okButtonProps={{ disabled: false }}
        onOk={() => {
          handleOk();
        }}
        onCancel={() => {
          handleCancel();
        }}>
        <div className="modalWrapper">
          <div className="modal_left">
            <div className="modal_rightTitle">
              <div style={{ marginBottom: '10px' }}> 已选生效条件</div>
              <div>
                {checkGroup.checkedList &&
                  checkGroup.checkedList.length > 0 &&
                  checkGroup.checkedList.map(items => {
                    return (
                      <div className="leftTag" key={items}>
                        {items}
                        <span
                          onClick={() => {
                            deleteTag(items);
                          }}>
                          x
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="modal_right">
            <div className="modalSearch">
              <div>搜索生效条件：</div>
              <Input
                placeholder="请输入生效名称"
                onChange={e => {
                  inputOnchange(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="selectText">选择生效条件：</div>
              <div style={{ marginBottom: '10px' }}>
                <Checkbox
                  indeterminate={checkGroup.indeterminate}
                  onChange={e => {
                    setCheckGroup({
                      checkedList: e.target.checked ? arrData : [],
                      indeterminate: false,
                      checkAll: e.target.checked,
                    });
                  }}
                  checked={checkGroup.checkAll}>
                  全选
                </Checkbox>
              </div>
              <div className="effect_checkGroup">
                <div>
                  <CheckboxGroup
                    options={arrData}
                    value={checkGroup.checkedList}
                    onChange={checkedList => {
                      onCheckchange(checkedList);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
