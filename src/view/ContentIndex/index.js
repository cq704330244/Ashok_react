import React, { Component, Fragment } from 'react';
import { Table } from 'antd';
import http from '../../utils/ajax';
import './index.less';
export default class ContentIndex extends Component {
  state = {
    columns: [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
      },
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '操作',
        key: '',
        render: record => (
          <>
            <a href="1">
              <span>查看详情</span>
            </a>
            <a href="2">
              <span>编辑</span>
            </a>
            <a href="3">
              <span>删除</span>
            </a>
          </>
        ),
      },
    ],
    data: [],
    isLoading: true,
    pagationOpt: {
      total: 0,
      current: 1,
      pageSize: 10,
    },
  };
  pagationChange(current, pagesize) {
    console.log(current, pagesize);
  }
  componentDidMount() {
    http.get('http://www.liulongbin.top:3006/api/cmtlist').then(res => {
      this.setState({
        data: res.data,
        pagationOpt: {
          total: res.data.length,
          current: 1,
          pageSize: 10,
        },
        isLoading: false,
      });
    });
  }
  render() {
    const { columns, data, isLoading, pagationOpt } = this.state;
    return (
      <Fragment>
        <Table
          dataSource={data}
          columns={columns}
          loading={isLoading}
          pagination={{
            ...pagationOpt,
            onChange: (current, pagesize) => {
              this.pagationChange(current, pagesize);
            },
          }}
          rowKey={record => {
            return record.id;
          }}
        />
      </Fragment>
    );
  }
}
