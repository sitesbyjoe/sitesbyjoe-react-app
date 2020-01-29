import React from 'react';
import axios from 'axios';

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      photos: [],
      portfolioItem: {
        id: "39",
        name: "Goldcoast Realty",
        url: "http://www.goldcoastsir.com",
        description: "Sotheby's International Realty, Inc. office in Ocean City, New Jersey.",
        goals: "",
        solution: "",
        technologies: "",
        comment: "",
        launch_date: "2011-06-28",
        rank: "3",
        image: null,
        tmb: null,
        slug: "goldcoast-realty-ocean-city",
        tags: "",
        category: null,
        views: "0",
        published: "1",
        photos: []
      }
    }
  }

  componentDidMount () {
    console.log('id', this.props.match.params.id)
    axios({
      url: 'https://sitesbyjoe.com/api/portfolio_detail/' + this.props.match.params.id,
      method: 'get',
    })
    .then(resp => {
      console.log('got', resp.data)
      if (resp.data.length > 0) {
        this.setState({
          portfolioItem: resp.data[0],
          photos: resp.data[0].photos
        })
      }
    })
    .catch(err => {
      console.error('oh shit', err)
    })
  }

  render () {
    return (
      <article className="portfolio portfolio-detail">
        <div className="section-heading">
          <h1>Portfolio: {this.state.portfolioItem.name}</h1>
        </div>

        <section className="photos">
        {this.state.photos.map(photo => 
          <div key={photo.id}>
            <img src={'http://sitesbyjoe.com/' + photo.image_path} alt={photo.caption} className="screenshot" />
            <p className="portfolio_caption">{photo.caption}</p>
          </div>
        )}
        </section>

        <section className="details">
          <h3>Goals</h3>
          <p>{this.state.portfolioItem.goals}</p>

          <h3>Solution</h3>
          <p>{this.state.portfolioItem.solution}</p>
        </section>
        
        <section className="info">
          <p><a href={this.state.portfolioItem.url} className="button">View Site</a></p>
          
          <span className="launch_date">Launched in May, 2011</span>
          <br />
          <span className="description">New website for a Raynham, MA Mobile Bakery</span>
          
          <h3>Technologies Used</h3>
          <p>HTML5/CSS3, jQuery, PHP/MySQL, Codeigniter</p>
        </section>
              
        <section className="testimonial">
          <h3>The Client said</h3>
          <p>&#8220;...After having a horrible experience with a past website designer coming to Sites by Joe was like a dream come true. The finished website is one of the most professional, smooth running websites I have ever come across. I am so thankful and proud that Joe was able to capture everything I asked for in my site. It is impeccably designed, crisp, clean and as professional as it comes not to mention it was built in such a timely manner! I could not have asked for a better website designer and would truly recommend him to anyone. It is not often that someone can fully trust another with such an important part of their business and be so satisfied with the final product! Thank you so much for all your hard work and getting my website completed so quickly!..&#8221;</p>
        </section>		
      </article>
    )
  }

}