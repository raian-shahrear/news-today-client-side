import React from 'react';
import Navbar from '../Pages/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../Pages/SharedComponents/LeftSidebar.js';
import RightSidebar from '../Pages/SharedComponents/RightSidebar.js';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <div className='w-10/12 mx-auto my-16'>
          <div className='grid grid-cols-12 gap-6'>
            <section className='lg:col-span-2 hidden lg:block'>
              <LeftSidebar/>
            </section>

            <section className='col-span-9 lg:col-span-8'>
              <Outlet/>
            </section>

            <section className='col-span-2'>
              <RightSidebar/>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;