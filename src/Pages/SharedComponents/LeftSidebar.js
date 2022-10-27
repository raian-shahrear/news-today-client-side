import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect( () => {
    fetch('https://news-today-server-flame.vercel.app/news-categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4 mt-6 lg:mt-0'>News Catagories</h2>
      {
        categories.map(news => 
        <li key={news.category_id} className='list-none'>
          <Link to={`/news-categories/${news.category_id}`}>{news.category_name}</Link>
        </li>)
      }
    </div>
  );
};

export default LeftSidebar;