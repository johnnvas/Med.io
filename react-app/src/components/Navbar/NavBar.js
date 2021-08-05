
import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        {/* <li>
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
        </li> */}
        <li>
          <NavLink to='/newpatientcard' exact={true} activeClassName='active'>
            New Patient Card
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
        <li>
           <span className='login-span'>Already a user?</span>
          <NavLink to='/login' exact={true} activeClassName='active'>
           Login
          </NavLink>
        </li>
      </>
    )
  }



  return (
    <nav className="navbar">
      <ul>
        <div className="navbar-left">
          <li className="navbar logo">
            <Link to={`/patientcards`}>
              <p className="logo"><span className='coloredWord'>Med</span><span className='secondWord'>.io</span></p>

            </Link>
          </li>
        </div>
        <div className="navbar-right">{sessionLinks}</div>
      </ul>
    </nav>
  );
}

export default NavBar;
