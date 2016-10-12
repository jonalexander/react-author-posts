import React, { Component } from 'react';


class FormPost extends Component {
  displayForm(){
    return (
      <form id="new-post-form" onSubmit={this.handleOnSubmitNewPost.bind(this)}>
        <input className="post-input-forms"
              id="post-title-input"
              type="text"
              placeholder="Title" />
        <textarea className="post-input-forms-body"
              id="post-text-input"
              form="new-post-form"
              placeholder="Body"
              />
        <button id="post-form-submit-button"
              type="submit">
              Post
              </button>
      </ form>
    )
  }

  handleOnSubmitNewPost(event){
    event.preventDefault()
    var postTitleInput = document.getElementById('post-title-input').value
    var postTextInput = document.getElementById('post-text-input').value
    document.getElementById('post-title-input').value = ""
    document.getElementById('post-text-input').value = ""
    var currentAuthorArray = this.props.store.getState().current_author
    var lastCurrentAuthorId = currentAuthorArray[ currentAuthorArray.length - 1 ].id
    this.props.store.dispatch( {
      type: 'ADD_POST',
      payload: {
        title: postTitleInput,
        text: postTextInput,
        id: this.props.store.getState().posts.length + 1,
        author_id: lastCurrentAuthorId
        } // closes payload
      } )
  }

  render(){
    var currentAuthor = this.props.store.getState().current_author
    return(
      <div>
        { currentAuthor.length > 0 ? <div> {this.displayForm()} </div> : <div/> }
      </div>
    )
  }
}

export default FormPost
