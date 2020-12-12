import React from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { routes } from '../../router/config';
import { Menu } from 'antd';

import './MenuPanel.css';

const MenuLinks = routes.map((route) => {
  return (
    <Menu.Item key={route.path} icon={route.icon}>
      <Link to={route.path}>
        <span>{route.name}</span>
      </Link>
    </Menu.Item>
  );
});

const MenuPanel: React.FunctionComponent<{}> = () => {
  const location = useLocation();
  const matchKey = (location: any) => {
    const matchedRoute = routes.find((route) =>
      matchPath(location.pathname, route)
    );
    if (matchedRoute) return matchedRoute.path;
    else return '/';
  };

  return (
    <Menu
      mode="inline"
      className="menu-container"
      defaultSelectedKeys={['/']}
      selectedKeys={[matchKey(location)]}
    >
      {MenuLinks}
    </Menu>
  );
};

export default MenuPanel;
