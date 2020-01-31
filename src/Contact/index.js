import React from 'react'
export default class Contact extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      choice: 'Neither',
      comments: '',
      spam: true
    }
  }

  handleChange = (e) => {
    console.log('change', e.target.id, e.target.type, e.target.value)
    var name = e.target.id
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form time!', this.state);
  }

  render () {
    return (
      <article className="contact">
        <div className="container">
          
          <div className="section-heading">
            <h1>Contact</h1>
          </div>

          <div>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend><span>Contact Info</span></legend>

                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="choice">Choice</label>
                  <select value={this.state.choice} onChange={this.handleChange}>
                    {this.props.choices.map(choice => 
                      <option key={choice} value={choice}>{choice}</option>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="comments">Comments</label>
                  <textarea id="comments" value={this.state.comments} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="spam">
                    <input type="checkbox" id="spam" checked={this.state.spam} onChange={this.handleChange} /> Spam me
                  </label>
                </div>

                <div>
                  <input type="submit" value="Submit" />
                </div>
              </fieldset>
            </form>
          </div>

        </div>
      </article>
    )
  }
}