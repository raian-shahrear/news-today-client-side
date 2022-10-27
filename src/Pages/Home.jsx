import React from 'react';
import { useLoaderData } from "react-router-dom";
import DisplayNews from './OtherComponents/DisplayNews';
import { Link } from "react-router-dom";

const Home = () => {
  const allNews = useLoaderData();
  console.log(allNews)
  return (
    <div>
      <h1 className='mb-8 text-center text-3xl font-semibold'>Top News</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          allNews.slice(0, 6).map(news => <DisplayNews key={news._id} news={news} />)
        }
      </div>
      <div className='flex justify-center mt-12'>
       <button className='btn'><Link to="/allnews">View All</Link></button>
      </div>
    </div>
  );
};

export default Home;