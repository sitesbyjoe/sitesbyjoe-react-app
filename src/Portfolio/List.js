import React from 'react';

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      portfolio = []
    }
  }

  componentDidMount () {
    console.log('did mount')
  }
}