import React, { Component } from 'react';


class FormAuthor extends Component {
  //this.props.store
  handleOnSubmitNewAuthor(event){
    event.preventDefault()
    var authorInput = document.getElementById('add-author-input').value
    document.getElementById('add-author-input').value = ""
    this.props.store.dispatch({
      type: 'ADD_AUTHOR',
      payload: {
        name: authorInput,
        id: this.props.store.getState().authors.length + 1
    }})
  }

  render(){
    return(
      <form onSubmit={this.handleOnSubmitNewAuthor.bind(this)}>
        <div>
          <input className="input-forms" id="add-author-input" type="text" placeholder="Add Author" />
        </div>
        <div className="form-button">
        </div>
      </form>
    )
  }
}

export default FormAuthor
