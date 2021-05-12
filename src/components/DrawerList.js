import {ListItemText, MenuItem, MenuList} from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

const DrawerList = (props) => {
  const activeRoute = (route) => {
    return route === props.location.pathname ? true : false;
  }
  const authChecked = useSelector(state => state.authChecked);
  const loggedIn = useSelector(state => state.loggedIn);
    return (authChecked && loggedIn) ? (
      <>
        <MenuList>
          <NavLink to='/'>
            <MenuItem selected={activeRoute('/')}>
              <ListItemText primary='Home' />
            </MenuItem>
          </NavLink>
          <NavLink to='/scribls'>
            <MenuItem selected={activeRoute('/scribls')}>
              <ListItemText primary='Scribls' />
            </MenuItem>
          </NavLink>
          <NavLink to='/newscribl'>
            <MenuItem selected={activeRoute('/newscribl')}>
              <ListItemText primary='New Scribl' />
            </MenuItem>
          </NavLink>
        </MenuList> 
      </>
      ) : (
      <>
        <MenuList>
          <NavLink to='/'>
            <MenuItem selected={activeRoute('/')}>
              <ListItemText primary='Home' />
            </MenuItem>
          </NavLink>
          <NavLink to='/signup'>
            <MenuItem selected={activeRoute('/signup')}>
              <ListItemText primary='Signup' />
            </MenuItem>
          </NavLink>
          <NavLink to='/login'>
            <MenuItem selected={activeRoute('/login')}>
              <ListItemText primary='Login' />
            </MenuItem>
          </NavLink>
        </MenuList>
      </>
    )
}

export default withRouter(DrawerList);
