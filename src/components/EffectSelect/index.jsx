import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Checkbox } from 'antd';

import './index.less';

export default props => {
  const { type, title, buttonText, listData, onenterOk } = props.config;
  const [visible, setVisible] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [value, setValue] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const [allChecked, setAllCheked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    value.length === listData.length ? setAllCheked(true) : setAllCheked(false);
  }, [value.length, listData.length]);
  const openModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    const submitData = listData.filter(items => {
      return value.indexOf(items.value) !== -1;
    });
    onenterOk(submitData);
    setValue([]);
    setSearchValue([]);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
    setValue([]);
    setSearchValue([]);
  };
  const allSelect = () => {
    if (allChecked) {
      setValue([]);
      setSearchValue([]);
    } else {
      const allSelectArr = [];
      listData.map(items => {
        allSelectArr.push(items.value);
        return true;
      });
      setValue(allSelectArr);
      setSearchValue(allSelectArr);
    }
  };

  const onCheckchange = checkvalue => {
    if (value.includes(checkvalue)) {
      const deleteValue = value.filter(item => {
        return item !== checkvalue;
      });
      setValue(deleteValue);
      setSearchValue(deleteValue);
    } else {
      setValue([...value, checkvalue]);
      setSearchValue([...value, checkvalue]);
    }
  };
  const onSearchCheckedchange = checkedValue => {
    if (searchValue.includes(checkedValue)) {
      const deleteValue = searchValue.filter(item => {
        return item !== checkedValue;
      });
      const newValue = value.filter(items => {
        return items !== checkedValue;
      });
      setSearchValue(deleteValue);
      setValue(newValue);
    } else {
      const NewValue = [...searchValue, checkedValue];
      NewValue.map(item => {
        if (value.indexOf(item) === -1) {
          setValue([...value, item]);
        }
        return true;
      });
      setSearchValue(NewValue);
    }
  };
  const inputOnchange = values => {
    if (values) {
      setIsSearch(true);
      let Arr = listData.filter(items => {
        return items.value.indexOf(values) !== -1;
      });
      setSearchData(Arr);
    } else {
      setIsSearch(false);
    }
  };
  const deleteTag = values => {
    const deleteTagArr = value.filter(items => {
      return items !== values;
    });
    setValue(deleteTagArr);
    setSearchValue(deleteTagArr);
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
                {value &&
                  value.length > 0 &&
                  value.map(items => {
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
                  onChange={e => {
                    allSelect(e);
                  }}
                  checked={allChecked}>
                  全选
                </Checkbox>
              </div>
              {!isSearch && (
                <div className="effect_checkGroup">
                  {Array.isArray(listData) &&
                    listData.length > 0 &&
                    listData.map(items => {
                      return (
                        <div key={items.value}>
                          <Checkbox
                            onChange={e => {
                              onCheckchange(items.value, e.target.checked);
                            }}
                            checked={value.includes(items.value)}>
                            {items.value}
                          </Checkbox>
                        </div>
                      );
                    })}
                </div>
              )}
              {isSearch && (
                <div className="effect_checkGroup">
                  {Array.isArray(searchData) &&
                    searchData.length > 0 &&
                    searchData.map(items => {
                      return (
                        <div key={items.value}>
                          <Checkbox
                            onChange={() => {
                              onSearchCheckedchange(items.value);
                            }}
                            checked={searchValue.includes(items.value)}>
                            {items.value}
                          </Checkbox>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
