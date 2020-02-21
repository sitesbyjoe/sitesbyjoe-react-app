// our Posts List component

import React, { useState, useEffect } from 'react';
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const PostsList = (props) => {

  const [loading, setLoading] = useState();

  useEffect (() => {
    if (props && props.posts && props.posts.length === 0) {
      setLoading(<p>Loading...</p>);
    } else {
      setLoading(null);
    }
  })

  return (
    <section className="portfolio-list">

      {loading}

      {props.posts.map(item => 
        <dl key={item.id}>
          {/* <dt className="image">
            <Link to={'/posts/detail/' + item.id} title={item.headline}>
              <h3>{item.headline}</h3>
            </Link>
            <span></span>
          </dt> */}
          <div className="details">
            <dd className="site_name"><Link to={'/posts/detail/' + item.id}>{item.headline}</Link></dd>
            <dd className="launch_date">Posted on <Moment format="MMMM D, YYYY">{item.datestamp}</Moment></dd>
            {/* <dd className="link"><a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>View Details<span></span></a></dd> */}
            {/* <dd className="description">{item.description} <a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>Details</a></dd> */}
          </div>
        </dl>

        // <div>
        //   <h3 key={item.id}>
        //     {item.headline}, {item.slug}
        //   </h3>
        //   <Moment format="MMMM D, YYYY">{item.datestamp}</Moment>
        //   <div dangerouslySetInnerHTML={{ __html: item.story }} />
        //   <hr />
        // </div>
      )}
          
    </section>
  )

}

export default PostsList;