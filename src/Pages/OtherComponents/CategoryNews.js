import React from 'react';
import { useLoaderData } from "react-router-dom";
import DisplayNews from './DisplayNews';

const CategoryNews = () => {
  const newsByCategory = useLoaderData();
  console.log(newsByCategory)
  return (
    <div>
      <h1 className='mb-8 text-center text-3xl font-semibold'>Category News: {newsByCategory.length}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          newsByCategory.map(news => <DisplayNews key={news._id} news={news} />)
        }
      </div>
    </div>
  );
};

export default CategoryNews;