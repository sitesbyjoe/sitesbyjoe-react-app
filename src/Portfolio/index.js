// our Portfolio container component
import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getPortfolio } from '../js/actions';
import PortfolioList from './List.js';

const Portfolio = (props) => {

  const portfolio = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  const getPortfolio = () => {
    return axios({
      url: 'http://sitesbyjoe.com/api/portfolio_list',
      method: 'get'
    })
    .then(resp => {
      console.log('getPortfolio returned', resp)
      dispatch({
        type: 'PORTFOLIO_LOADED',
        payload: resp.data
      })
    })
    .catch(err => {
      console.error('oh shit', err)
    });
  }

  // TODO: should move this to my sass
  const disclaimerStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontWeight: 'normal',
    textAlign: 'center'
  };

  useEffect(() => {
    console.log('portfolio container did mount')
    getPortfolio();
    // dispatch(() => { getPortfolio() })
  }, []);

  return (
    <article className="portfolio">
      <div className="container">

        <div className="section-heading">
          <h1>Web Design <span className="red">Portfolio Archive</span></h1>
          <p style={disclaimerStyle}>These are websites I had designed and built before joining Edvisors Networks, Inc.	 in October 2011 as a Senior Front End Developer.</p>
        </div>

        <PortfolioList portfolio={portfolio} />

      </div>
    </article>
  )

}

export default Portfolio;
