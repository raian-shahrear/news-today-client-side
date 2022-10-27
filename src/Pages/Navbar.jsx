import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../Contexts/AuthContext';

const Navbar = () => {
  const {signOutUser, user} = useContext(UserContext);

  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      alert('Sign Out is successful');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='shadow-lg'>
      <div className="navbar lg:w-10/12 mx-auto">
        <div className="flex">
          <div className="dropdown navbar-start">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/allnews">All News</Link></li>
              {
              !user && !user?.uid ? 
              <li><button className='btn bg-transparent hover:text-white my-2'><Link to="/login">Log In</Link></button></li>
              :
              <>
                <li><button onClick={handleSignOut} className='btn bg-transparent hover:text-white my-2'>Sign Out</button></li>
                <li><small>{user?.displayName && user.displayName}</small></li>
              </>
            }
            </ul>
          </div>
          <a href='/' className="btn btn-ghost normal-case text-xl">News Today</a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/allnews">All News</Link></li>
            {
              !user && !user?.uid ? 
              <li><button className='btn bg-transparent hover:text-white lg:ml-4'><Link to="/login">Log In</Link></button></li>
              :
              <>
                <li><button onClick={handleSignOut} className='btn bg-transparent hover:text-white lg:mx-4'>Sign Out</button></li>
                
                <li><small>{user?.displayName && user.displayName}</small></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;