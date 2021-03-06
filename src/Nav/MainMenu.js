import React from 'react';
import { NavLink } from 'react-router-dom'

const MainMenu  = (props) => {

  return (
    <nav>
      <ul className="main-nav">
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        {/* <li><a href="posts.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li> */}
      </ul>
    </nav>
  )
}

export default MainMenu