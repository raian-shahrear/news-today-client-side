import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h3 className='text-4xl font-bold mb-8'>Opps!!</h3>
      <h1 className='text-8xl font-semibold mb-6'>{error.statusText || error.message}</h1>
      <h3 className='text-6xl font-semibold'>{error.status}</h3>
    </div>
  );
};

export default ErrorPage;