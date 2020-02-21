// our Portfolio container component

import React from 'react';
import { connect } from 'react-redux';
import { getPortfolio } from '../js/actions';
import PortfolioList from './List.js';

class Portfolio extends React.Component {

  // TODO: should move this to my sass
  disclaimerStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontWeight: 'normal',
    textAlign: 'center'
  }

  componentDidMount () {
    console.log('portfolio container did mount')
    this.props.getPortfolio();
  }

  render () {
    return (
      <article className="portfolio">
        <div className="container">

          <div className="section-heading">
            <h1>Web Design <span className="red">Portfolio Archive</span></h1>
            <p style={this.disclaimerStyle}>These are websites I had designed and built before joining Edvisors Networks, Inc.	 in October 2011 as a Senior Front End Developer.</p>
          </div>

          <PortfolioList portfolio={this.props.portfolio} />

        </div>
      </article>
    )
  }

}

function mapStateToProps (state) {
  return { 
    portfolio: state.portfolio
  };
};

export default connect(mapStateToProps, { getPortfolio })(Portfolio)
