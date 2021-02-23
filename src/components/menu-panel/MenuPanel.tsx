import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@material-ui/core';

import { routes } from '../../router/config';

import './MenuPanel.css';

interface MenuPanelProps {
  mini?: Boolean;
  onItemSelected: () => void;
}

const MenuPanel: React.FunctionComponent<MenuPanelProps> = (props) => {
  const location = useLocation();
  const activeRoute = (pathName: string) => {
    return location.pathname === pathName;
  };

  const MenuLinks = routes.map((route) => {
    return (
      <ListItem
        button
        key={route.path}
        component={Link}
        to={route.path}
        selected={activeRoute(route.path)}
        onClick={props.onItemSelected}
      >
        {route.icon ? (
          <Tooltip title={props.mini ? route.name : ''} placement="right-start">
            <ListItemIcon>{route.icon}</ListItemIcon>
          </Tooltip>
        ) : null}

        <ListItemText>{route.name}</ListItemText>
      </ListItem>
    );
  });

  return <List>{MenuLinks}</List>;
};

export default MenuPanel;
