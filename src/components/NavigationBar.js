import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from '../Routes';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  ToolBar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: auto,
    },
  }),
);

const NavigationBar = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const routeActive = (route) => {
    return props.location.pathname === route ? true : false;
  }

  return (
    <div>
      <div className={classe.root}>
        <AppBar position='static'>
          <ToolBar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </ToolBar>
        </AppBar>
      </div>

  )

}

