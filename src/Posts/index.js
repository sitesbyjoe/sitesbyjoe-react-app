// our Posts container component

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../js/actions';
import PostsList from './List.js';

const Posts = (props) => {

  const posts = useSelector(state => state.posts);

  useEffect (() => {
    console.log('posts container useEffect')
    getPosts();
  }, [])

  return (
    <article className="portfolio">
      <div className="container">

        <div className="section-heading">
          <h1>Posts <span className="red">About Stuff</span></h1>
          <p>I'll do what I want, I'm grown.</p>
        </div>

        <PostsList posts={posts} />

      </div>
    </article>
  )

}

export default Posts;
