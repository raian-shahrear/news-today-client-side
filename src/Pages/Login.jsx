import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from '../Contexts/AuthContext';


const Login = () => {
  const {signInUser} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setErrorMessage('');
      e.target.reset();
      navigate(from, {replace: true})
    })
    .catch(err => {
      console.log(err);
      setErrorMessage(err.message);
    })
  }

  return (
    <div>
      <h1 className='mb-4 text-center text-3xl font-semibold'>Login !!</h1>
      <p className='text-center text-red-600 mb-4'><small>{errorMessage}</small></p>
      <form onSubmit={handleLogin} className='w-2/4 mx-auto shadow-xl p-4'>
        <div className='mb-4'>
          <label className='mb-2 block' htmlFor="email">Email</label>
          <input type="email" name='email' id='email' placeholder='valid email' className='block border-2 border-black rounded-md py-1 px-2 w-full' />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block' htmlFor="pass">Password</label>
          <input type="password" name='password' id='pass' placeholder='password' className='block border-2 border-black rounded-md py-1 px-2 w-full' />
        </div>

        <div>
          <button type='submit' className='btn '>Log In</button>
        </div>
      </form>
      <p className='text-center font-semibold mt-6'>New in this website? Please <Link to='/signup' className='text-sky-600 hover:underline'>Sign Up</Link></p>
    </div>
  );
};

export default Login;