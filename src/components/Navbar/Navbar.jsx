import React from 'react';
import {NavLink} from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function Navbar({ user, setUser }) {
  
  
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  
  return (
      <nav>
        <NavLink to="/orders">Order History</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/orders/new">New Puppy</NavLink>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>
			  &nbsp; | &nbsp;
        <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>
      </nav>
    );
  }