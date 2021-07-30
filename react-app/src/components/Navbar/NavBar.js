
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </>
    )
  } else {
    sessionLinks=(
    <>
        <ul>
           <span className='login-span'>Already a user?</span>
          <NavLink to='/login' exact={true} activeClassName='active'>
           Login
          </NavLink>
        </ul>
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
