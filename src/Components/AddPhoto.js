import React, { Component } from 'react'

class AddPhoto extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value
    const description = event.target.elements.description.value
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    }
    if (description && imageLink) {
// S7.L50.4.
      // Remove onAddPhoto() logic and instead emit our Action, but first we must 
      // declare our Action in 'actions.js'...
      //this.props.onAddPhoto(post)
// S7.L50.7.
      // Emit an Action with addPost() (defined in 'actions.js'), this Action will
      // go straight to the Reducer, and when it does will add it as a 'case' to 
      // our 'switch' statement. See S7.L50.8. is 'reducer.js'.
      this.props.addPost(post)
// S7.L50.10.
      // Update the histort to the address bar to the empty path '/'
      this.props.onHistory.push('/')
    }
  }
  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Desciption" name="description" />
            <button> Post </button>
          </form>
        </div>
      </div>
    )
  }
}
export default AddPhoto