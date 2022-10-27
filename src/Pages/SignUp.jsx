import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/AuthContext';

const SignUp = () => {
  const {createUser, updateUser} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value; 
    const email = e.target.email.value; 
    const password = e.target.password.value;
    
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setErrorMessage('');
      setSuccessMessage(true);
      updateUserProfile(name);
      e.target.reset();
      navigate('/');
    })
    .catch(err => {
      console.log(err);
      setErrorMessage(err.message);
      setSuccessMessage(false);
    })
  }

  const updateUserProfile = (name) => {
    updateUser(name)
    .then(() => {
      console.log('user updated')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1 className='mb-4 text-center text-3xl font-semibold'>Sign Up !!</h1>
      <div className='text-center mb-4'>
        {
          successMessage ? <p className='text-green-700'><small>Account created successfully</small></p>
          :
          <p className='text-red-600'><small>{errorMessage}</small></p>
        }
        
      </div>
      <form onSubmit={handleSignUp} className='w-2/4 mx-auto shadow-xl p-4'>
        <div className='mb-4'>
          <label className='mb-2 block' htmlFor="fname">Full Name</label>
          <input type="text" name='name' id='fname' placeholder='name' className='block border-2 border-black rounded-md py-1 px-2 w-full' />
        </div>
        <div className='mb-4'>
          <label className='mb-2 block' htmlFor="email">Email</label>
          <input type="email" name='email' id='email' placeholder='valid email' className='block border-2 border-black rounded-md py-1 px-2 w-full' />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block' htmlFor="pass">Password</label>
          <input type="password" name='password' id='pass' placeholder='password' className='block border-2 border-black rounded-md py-1 px-2 w-full' />
        </div>

        <div>
          <button type='submit' className='btn '>Sign Up</button>
        </div>
      </form>
      <p className='text-center font-semibold mt-6'>Already have an account? Please <Link to='/login' className='text-sky-600 hover:underline'>Log In</Link></p>
    </div>
  );
};

export default SignUp;