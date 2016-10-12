import React, { Component } from 'react';
import IndividualAuthor from './individual_author'
import ChangeCurrentAuthor from '../../actions/change_current_author'

class ContainerAuthors extends Component {
  handleClickOnAuthor(event){
    event.preventDefault()
    var selectedAuthor = event.target.getAttribute('value')
    var selectedAuthorObject = this.props.store.getState().authors.find( (author) => { return author.name === event.target.getAttribute('value')})

    this.props.store.dispatch(change_current_author(selectedAuthorObject))
    // this.props.store.dispatch({
    //   type: 'CHANGE_CURRENT_AUTHOR',
    //   payload: selectedAuthorObject
    // })
  }

  render(){
    var counter = 0

    var authors = this.props.store.getState().authors
    var handleClickOnAuthor = this.handleClickOnAuthor.bind(this)

    var allAuthors = authors.map( function(author){
      return(
        <IndividualAuthor key={counter++}
          authorData={author}
          handleClickOnAuthor={handleClickOnAuthor}
          />
      )})

    return(
      <div className="author-container">
        {allAuthors}
      </div>
    )
  }
}

export default ContainerAuthors
