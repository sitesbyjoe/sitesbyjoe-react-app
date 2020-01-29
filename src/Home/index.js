import React from 'react';
import Highlight from './Highlight';
import Content from './Content';
import ContactBar from './ContactBar';

export default class Home extends React.Component {
  state = {};

  render () {
    return (
      <div className="homepage">

        <Highlight />

        <Content />

        <ContactBar />

      </div>
    )
  }

}
/*

    */