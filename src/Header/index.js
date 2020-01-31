import React, { Component } from 'react';
import MainMenu from '../Nav/MainMenu';
import { Link } from 'react-router-dom'

export default class Header extends Component {

  render () {
    return (
      <header>
        <MainMenu />
        <Link className="logo" to="/"><b>Sites</b>byJoe</Link>
      </header>	
    )
  }

}