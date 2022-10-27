import React from 'react';
import { useLoaderData, Link } from "react-router-dom";

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const {image_url, title, details, category_id } = singleNews;
  console.log(singleNews);
  return (
    <div className="card card-compact w-8/12 mx-auto bg-base-100 shadow-xl">
      <figure><img src={image_url} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
      <div className='flex justify-center my-6'>
       <button className='btn'><Link to={`/news-categories/${category_id}`}>Go to category</Link></button>
      </div>
    </div>
  );
};

export default NewsDetails;