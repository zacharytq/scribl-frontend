import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Drawer, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240
  },
  drawerPaper: {
    width: 240
  }
}))

const Navbar = () => {
  const classes = useStyles();
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen)
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
      </Drawer>
    </div>
  )
}

export default Navbar;
