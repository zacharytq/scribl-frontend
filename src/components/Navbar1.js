import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Drawer, makeStyles, MenuList, MenuItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Routes from '../Routes'
import { NavLink, withRouter } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240
  },
  drawerPaper: {
    width: 240
  },
  list: {
    width: 'auto'
  }
}))

const Navbar = (props) => {
  const classes = useStyles();
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen)

  const activeRoute = (route) => {
    return route === props.location.pathname ? true : false;
  }

  return (
    <div>
      <div>
        <AppBar >
          <Toolbar>
            <IconButton edge='start' onClick={toggleIsOpen}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer className={classes.drawer} open={isOpen} onClose={toggleIsOpen} classes={{ paper: classes.drawerPaper}}>
        <div
          className={classes.list}
          role='presentation'
          onClick={toggleIsOpen}
        >
          <MenuList>
            {Routes.map((route, key) => {
              return (
                <NavLink to={route.path} key={key}>
                  <MenuItem selected={activeRoute(route.path)}>
                    <ListItemText primary={route.sidebarName} />
                  </MenuItem>
                </NavLink>
              ) 
            })}
          </MenuList>
        </div>
      </Drawer>
    </div>
  )
}

export default withRouter(Navbar);
