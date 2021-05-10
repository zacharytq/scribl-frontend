// src/components/Navbar.js
import React, {useState} from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { checkAuth } from "../actions/auth";

class Navbar extends React.Component {
  componentDidMount() {
    this.props.dispatchCheckAuth();
  }

  renderAuthLinks() {
    const { authChecked, loggedIn, currentUser } = this.props;
    if (authChecked) {
      return loggedIn ? (
        <>
          {currentUser.email}
          <Logout />
        </>
      ) : (
        <>
          <NavLink
            className='p-4 inline-block'
            activeClassName='text-blue-900'
            exact
            to='/signup'
          >
            Sign Up
          </NavLink>
          <NavLink
            className='p-4 inline-block'
            activeClassName='text-blue-900'
            exact
            to='/login'
          >
            Log In
          </NavLink>
        </>
      );
    } else {
      return null
    }
  }

  const renderAuthMenu = () => {

    const { authChecked, loggedIn, currentUser} = this.props;
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
      setIsOpen(!isOpen)
    }  
    if (authChecked) {
      if (loggedIn) {
        return (
          <>

          </>
        )
      }
    }
  }

  render() {
    return (
      <nav className='bg-blue-50 text-blue-500'>
        <div className='w-11/12 max-w-6xl mx-auto grid sm:grid-cols-3 md:grid-cols-4'>
          <div className='sm:col-span-2 md:col-span-3'>
            <NavLink
              className='p-4 block sm:inline-block'
              activeClassName='text-blue-900'
              exact
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className='p-4 block sm:inline-block'
              activeClassName='text-blue-900'
              exact
              to='/protected_route'
            >
              ProtectedRoute
            </NavLink>
          </div>
          <div className='sm:text-right'>
            {this.renderAuthLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCheckAuth: () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
