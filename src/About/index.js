import React from 'react';
import { connect } from "react-redux";

class About extends React.Component {

  componentDidMount () {
    console.log('mounted, props?', this.props)
  }

  render () {
    
    const NoUsers = (users) => {
      console.log('NoUSers', users)
      if (users.length === 0) {
        return <p>no users</p>
      } else {
        return<p>some users, {JSON.stringify(users)}</p>
      }
    }

    const NoChildrenz = (childrenz) => {
      if (childrenz.length === 0) {
        return <p>No childrenz</p>
      } else {
        return <p>some childrenz, {JSON.stringify(childrenz)}</p>
      }
    }

    return (
      <article>
        <div className="container">

          <div className="section-heading">
            <h1>About</h1>
          </div>

          <NoUsers users={this.props.users} />

          <NoChildrenz childrenz={this.props.childrenz} />

          <h2 className="darkgrey">What is Sites by Joe?</h2>

          <p>Sites by Joe was a tiny design studio I started almost 20 years ago that made custom websites. My motto was "Clean, Simple & Elegant Web Design" and that's just what I did. The studio was located in Cape May County, New Jersey and I focused on local area business websites. I built every website by hand and provided full stack website service. I still help some of those businesses today.</p>

          <p>I focused on Real Estate websites at first. It seemed logical since that was the business I was in before I made the leap into web design. I quickly racked up a decent number of clients and developed a few software platforms for real estate websites - i.e. MLS searching and I even developed my own rental management software for seashore real estate offices, Leasetool.</p>

          <h3>Joining the Corporate World</h3>

          <p>By 2011 I was getting worn out on designing site after site so in 2011 I made the decision to stop "slinging sites" full time for a living and accepted a full time position with Edvisors, Inc. as a senior front end developer. That role grew as I evolved and by 2016 I was their Lead UI/UX Developer. I loved working at Edvisors but after 5 years I was bored again.</p>

          <p>In 2016 I joined Aerohive Networks in Portland, OR as a Staff Engineer. This was a challenging role that ended after a year or so as they closed their satellite Portland office and I didn't want to relocated to the San Jose area.</p>

          <p>In late 2017 I joined MScience, LLC as their Lead UI/UX Architect and I'm still there today.</p>

          <p>Over the years I've been involved in hundreds of web projects, and saw them through from end to end. I've made a career out of employing modern techniques to fulfill business objectives on the web.</p>

          <p>From in depth photoshop comps, sketch documents and wireframes to database design and infrastructure development - I've literally done it all and loved every minute of it.</p>

        </div>
			</article>
    )
  }
}

function mapStateToProps(state) {
  const {childrenz, users} = state;
  return {
    childrenz, 
    users
  }
}

export default connect(mapStateToProps)(About)