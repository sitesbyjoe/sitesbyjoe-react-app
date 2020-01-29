import React from 'react';
import axios from 'axios';

export default class Portfolio extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      portfolio: []
    }
  }

  disclaimerStyle = {
    color: 'rgba(255,255,255,0.6)',
  }

  componentDidMount () {
    console.log('did mount')
    axios({
      url: 'http://sitesbyjoe.com/api/portfolio_list',
      method: 'get'
    })
    .then(resp => {
      console.log('got something', resp)
      this.setState({
        portfolio: resp.data
      })

    })
    .catch(err => {
      console.error('oh shit', err)
    })

  }

  componentWillUnmount () {
    console.log('unmount')
  }

  render () {
    return (
      <article class="portfolio">
        <div className="container">

          <div className="section-heading">
            <h1>Web Design <span className="red">Portfolio Archive</span></h1>
            <p style={this.disclaimerStyle}>These are websites I had designed and built before joining Edvisors Networks, Inc.	 in October 2011 as a Senior Front End Developer.</p>
          </div>

          <div id="portfolio-list" className="portfolio-list">	

            {/*
            category: null
            comment: ""
            description: "A new website for a college scholarship search service."
            goals: "The original collegescholarships.com was created in 1995 and needed to be rebuilt into a web application that allowed for storing and search college scholarships."
            id: "80"
            image: null
            image_path: "uploads/portfolio/80-college-scholarships-tmb.jpg"
            launch_date: "2011-08-01"
            name: "College Connection"
            published: "1"
            rank: "1"
            slug: "college-connection"
            solution: "The project was built in 2 phases. The first phase was taking the cumbersome static file system and turning it into a dynamic online system.\n\nThe 2nd Phase involved building a public interface that allowed students to create profiles on the site that would automatically display matching scholarships based on their interests and needs.\n\nIn the first 48 hours the site had dramatically increased it's traffic and had picked up hundreds of new profiles without any marketing whatsoever."
            tags: "blue, college scholarships, college connection, codeigniter"
            technologies: "PHP, MySQL, Codeigniter, Javascript, HTML, CSS, jQuery"
            tmb: null
            url: "http://www.collegescholarships.com"
            views
            */}
              
            { this.state.portfolio.map(item => 
              <dl>
                <dt className="image">
                  <a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug} title={item.description}>
                    <img alt={item.name} src={'https://sitesbyjoe.com/' + item.image_path} />
                  </a>
                  <span></span>
                </dt>
                <div className="details">
                  <dd className="site_name"><a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>{item.name}</a></dd>
                  <dd className="launch_date">Launched {item.launch_date}</dd>
                  {/* <dd className="link"><a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>View Details<span></span></a></dd> */}
                  {/* <dd className="description">{item.description} <a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>Details</a></dd> */}
                </div>
              </dl>
            )}
            

          </div>
        </div>
      </article>
    )
  }

}
