import React from 'react';
import { Link } from "react-router-dom";

const DisplayNews = ({news}) => {
  const {thumbnail_url, title, details, _id} = news;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={thumbnail_url} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
          details.length > 250 ?
          <p>{details.slice(0, 249) + "..."} <Link className='text-blue-600' to={`/news/${_id}`}>See Details</Link></p>
          :
          <p>{details}</p>
        } 
      </div>
    </div>
  );
};

export default DisplayNews;