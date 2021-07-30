
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </>
    )
  } else {
    sessionLinks=(
    <>
        <div>
          <p>Already a user?</p>
          <NavLink to='/login' exact={true} activeClassName='active'>
             Login
          </NavLink>
        </div>
      </>
    )
  }


  return (
    <nav className="navbar">
      <ul>
        <div className="navbar right">{sessionLinks}</div>
      </ul>
    </nav>
  );
}

export default NavBar;
