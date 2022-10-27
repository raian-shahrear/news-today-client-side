import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { UserContext } from '../../Contexts/AuthContext';

const RightSidebar = () => {
  const {googleUser, facebookUser} = useContext(UserContext);
  const navigate = useNavigate()

  // google login
  const handleGoogleUser = () => {
    googleUser()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    })
  }

  // facebook login
  const handleFacebookUser = () => {
    facebookUser()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-3">
        <button onClick={handleGoogleUser} className="btn bg-transparent text-black hover:text-white"><BsGoogle className='mr-4' /> Google</button>
        <button onClick={handleFacebookUser} className="btn bg-transparent text-black hover:text-white"><BsFacebook className='mr-4' /> Facebook</button>
      </div>

      <div className='mt-12 flex flex-col gap-2'>
        <Link to="/login"><button className='btn w-full'>Log In</button></Link>
        <Link to="/signup"><button className='btn w-full'>Sign Up</button></Link>
      </div>
      
    </div>
  );
};

export default RightSidebar;