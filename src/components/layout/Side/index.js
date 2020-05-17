import React from 'react';
import { Menu } from 'antd';
import menuList from './config.js';
import { Link, withRouter } from 'react-router-dom';
import './index.less';
import {
  AppstoreAddOutlined,
  HomeOutlined,
  RocketOutlined,
  ClusterOutlined,
  CrownOutlined,
  InstagramOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Side extends React.Component {
  rendericon(icon) {
    if (icon === 'home') {
      return <HomeOutlined />;
    }
    if (icon === 'laptop') {
      return <AppstoreAddOutlined />;
    }
    if (icon === 'bars') {
      return <RocketOutlined />;
    }
    if (icon === 'edit') {
      return <ClusterOutlined />;
    }
    if (icon === 'copy') {
      return <CrownOutlined />;
    }
    if (icon === 'desktop') {
      return <InstagramOutlined />;
    }
    if (icon === 'message') {
      return <MessageOutlined />;
    }
    if (icon === 'other') {
      return <StarOutlined />;
    }
  }
  renderMenu(data) {
    return data.map(item => {
      if (item.subs) {
        return (
          <SubMenu
            key={item.key}
            icon={this.rendericon(item.icon)}
            title={item.title}>
            {item.subs.map(items => {
              if (items.subs) {
                return (
                  <SubMenu key={items.key} title={items.title}>
                    {items.subs.map(itemss => {
                      return (
                        <Menu.Item key={itemss.key}>
                          <Link to={itemss.key}> {itemss.title}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={items.key}>
                  <Link to={items.key}> {items.title}</Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={this.rendericon(item.icon)}>
          <Link to={item.key}> {item.title}</Link>
        </Menu.Item>
      );
    });
  }
  menuSelect(value) {
    console.log(value.key);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="logowrap">
          <div className="logo"></div>
          <h1>Ashok</h1>
        </div>
        <Menu
          defaultSelectedKeys={['/admin/home']}
          defaultOpenKeys={['/admin/pro']}
          mode="inline"
          theme="dark"
          onSelect={this.menuSelect.bind(this)}>
          {this.renderMenu(menuList)}
        </Menu>
      </div>
    );
  }
}

export default withRouter(Side);
