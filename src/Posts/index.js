// our Posts container component

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../js/actions';
import PostsList from './List.js';

const Posts = (props) => {

  useEffect (() => {
    console.log('posts container useEffect')
    props.getPosts();
  }, [])

  return (
    <article className="portfolio">
      <div className="container">

        <div className="section-heading">
          <h1>Posts <span className="red">About Stuff</span></h1>
          <p>I'll do what I want, I'm grown.</p>
        </div>

        <PostsList posts={props.posts} />

      </div>
    </article>
  )

}

function mapStateToProps (state) {
  return { 
    posts: state.posts
  };
};

export default connect(mapStateToProps, { getPosts })(Posts)
