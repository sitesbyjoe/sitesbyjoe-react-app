import React from 'react';
import axios from 'axios';
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export default class Portfolio extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      portfolio: [],
      loading: true,
    }
  }

  disclaimerStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontWeight: 'normal',
    textAlign: 'center'
  }

  showLoading () {
    if (this.state.portfolio.length === 0) {
      return <p>Loading...</p>
    }
  }

  componentWillMount () {
    console.log('portfolio will mount')
  }

  componentDidMount () {
    console.log('portfolio did mount')
    axios({
      url: 'http://sitesbyjoe.com/api/portfolio_list',
      method: 'get'
    })
    .then(resp => {
      console.log('got something', resp)
      this.setState({
        portfolio: resp.data,
        loading: false
      })
    })
    .catch(err => {
      console.error('oh shit', err)
    })

  }

  render () {
    let loading;
    if (this.state.loading === true) {
      loading = <p>Loading...</p>
    }

    return (
      <article className="portfolio">
        <div className="container">

          <div className="section-heading">
            <h1>Web Design <span className="red">Portfolio Archive</span></h1>
            <p style={this.disclaimerStyle}>These are websites I had designed and built before joining Edvisors Networks, Inc.	 in October 2011 as a Senior Front End Developer.</p>
          </div>

          {loading}

          {this.state.portfolio.map(item => 
            <dl key={item.id}>
              <dt className="image">
                <Link to={'/portfolio/detail/' + item.id} title={item.description}>
                  <img alt={item.name} src={'https://sitesbyjoe.com/' + item.image_path} />
                </Link>
                <span></span>
              </dt>
              <div className="details">
                <dd className="site_name"><Link to={'/portfolio/detail/' + item.id}>{item.name}</Link></dd>
                <dd className="launch_date">Launched <Moment format="MMMM, YYYY">{item.launch_date}</Moment></dd>
                {/* <dd className="link"><a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>View Details<span></span></a></dd> */}
                {/* <dd className="description">{item.description} <a href={'https://sitesbyjoe.com/portfolio/detail/' + item.slug}>Details</a></dd> */}
              </div>
            </dl>
          )}
            
        </div>
      </article>
    )
  }

}
