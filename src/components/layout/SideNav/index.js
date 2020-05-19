import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import RIcon from './RenderIcon';
import menuList from './config.js';
import './index.less';

const { SubMenu } = Menu;

class SideNav extends React.Component {
  renderMenu(data) {
    return data.map(item => {
      if (item.subs) {
        return (
          <SubMenu
            key={item.key}
            icon={<RIcon icon={item.icon} />}
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
        <Menu.Item key={item.key} icon={<RIcon icon={item.icon} />}>
          <Link to={item.key}> {item.title}</Link>
        </Menu.Item>
      );
    });
  }
  render() {
    return (
      <Fragment>
        <div className="as-side">
          <div className="logo">
            <div className="logo_pic"></div>
            <div className="logo_text">Ashok</div>
          </div>
          <Menu
            defaultSelectedKeys={['/admin/home']}
            defaultOpenKeys={['/admin/home/general']}
            mode="inline"
            theme="dark">
            {this.renderMenu(menuList)}
          </Menu>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SideNav);
