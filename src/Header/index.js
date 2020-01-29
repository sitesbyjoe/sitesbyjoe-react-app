import React, { Component } from 'react';
import MainMenu from '../Nav/MainMenu';

export default class Header extends Component {

  render () {
    return (
      <header>
        <MainMenu />
        <a className="logo" href="index.html"><b>Sites</b>byJoe</a>
      </header>	
    )
  }

}