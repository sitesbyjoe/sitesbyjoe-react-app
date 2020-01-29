import React from 'react';

export default class ContactBar extends React.Component {

  render () {
    return (
      <section className="contact-bar">
        <h3 className="darkgrey">Wanna Talk?</h3>
        <p><a href="/contact" className="button">Contact Me</a></p>
      </section>
    )
  }
}