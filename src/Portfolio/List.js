// our Portfolio container component

import React from 'react';
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

class PortfolioList extends React.Component {

  // constructor (props) {
  //   super(props);
  // }

  componentDidMount () {
    console.log('portfolio list did mount', this.props)
  }

  render () {
    let loading = '';
    
    if (this.props && this.props.portfolio && this.props.portfolio.length === 0) {
      loading = <p>Loading...</p>
    }

    return (
      <section className="portfolio-list">

        {loading}

        {this.props.portfolio.map(item => 
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
            
      </section>
    )
  }

}

export default PortfolioList;