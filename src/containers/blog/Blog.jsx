import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Stay in the loop with us 24/7</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_left">
          <Article imgUrl={blog01} date="Sep 26, 2023" title="GPT3 is here and already making a difference..."/>
        </div>
        <div className="gpt3__blog-container_right">
          <Article imgUrl={blog02} date="Sep 26, 2023" title="GPT3 is here and already making a difference..."/>
          <Article imgUrl={blog03} date="Sep 26, 2023" title="GPT3 is here and already making a difference..."/>
          <Article imgUrl={blog04} date="Sep 26, 2023" title="GPT3 is here and already making a difference..."/>
          <Article imgUrl={blog05} date="Sep 26, 2023" title="GPT3 is here and already making a difference..."/>
        </div>
      </div>
    </div>
  )
}

export default Blog