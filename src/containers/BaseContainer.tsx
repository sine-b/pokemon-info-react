import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { find } from 'lodash';
import {
  AppBar,
  Drawer,
  Divider,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Paper,
} from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';
import clsx from 'clsx';

import Router from '../router/Router';
import { routes } from '../router/config';
import MenuPanel from '../components/menu-panel/MenuPanel';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import './BaseContainer.css';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    contentPaper: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(7) + 1,
      },
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      maxHeight: '100%',
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(9) + 1,
      },
    },
  };
});

export default function BaseContainer() {
  const classes = useStyles();
  const theme = useTheme();

  const location = useLocation();
  useEffect(() => {
    let activePath = find(routes, (route) => {
      return location.pathname === route.path;
    });
    setTitle(activePath?.name || '');
  }, [location.pathname]);

  const [title, setTitle] = useState('');

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="layout-container">
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          {!drawerOpen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className={classes.menuButton}
              onClick={handleDrawerOpen}
            >
              <Menu />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="permanent"
            open={drawerOpen}
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: drawerOpen,
              [classes.drawerClose]: !drawerOpen,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen,
              }),
            }}
            onClose={handleDrawerClose}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>
            </div>
            <Divider />
            <MenuPanel mini onItemSelected={handleDrawerClose} />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            className={classes.drawerOpen}
            classes={{
              paper: classes.drawerOpen,
            }}
          >
            <MenuPanel onItemSelected={handleDrawerClose} />
          </Drawer>
        </Hidden>
      </div>
      <Paper elevation={0} className={classes.contentPaper}>
        <Router routes={routes}></Router>
      </Paper>
    </div>
  );
}
