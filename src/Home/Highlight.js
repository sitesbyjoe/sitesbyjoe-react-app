import React, { Component } from 'react';

export default class Highlight extends Component {
  
  render () {
    return (
      <section className="highlight">
        <div className="devices">
          <img className="desktop" src="assets/images/desktop.png" alt="Desktop" />
          <img className="laptop" src="assets/images/laptop.png" alt="Laptop" />
          <img className="tablet-large" src="assets/images/tablet-large.png" alt="Table Large" />
          <img className="tablet-small" src="assets/images/tablet-small.png" alt="Table Small" />
          <img className="phone-large" src="assets/images/iphone5.png" alt="Phone Large" />
        </div>
        <h1>Clean, Simple &amp; Elegant <span className="red">Web Design</span></h1>
        <p><i>Handmade in the USA since 2004</i></p>
      </section>
    )
  }
}