import React from 'react';
import { useLoaderData } from "react-router-dom";
import DisplayNews from './DisplayNews';

const AllNews = () => {
  const allNews = useLoaderData();
  console.log(allNews)
  return (
    <div>
      <h1 className='mb-8 text-center text-3xl font-semibold'>Category News: {allNews.length}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          allNews.map(news => <DisplayNews key={news._id} news={news} />)
        }
      </div>
    </div>
  );
};

export default AllNews;