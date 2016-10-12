import React, { Component } from 'react';

class CurrentAuthor extends Component {
  render(){
    var lastCurrentAuthorName
    var currentAuthorArray = this.props.store.getState().current_author
    lastCurrentAuthorName = currentAuthorArray.length > 0 ? currentAuthorArray[currentAuthorArray.length - 1].name : ""

    return(
      <div className="current-author-header">
        <h5>{lastCurrentAuthorName}</h5>
      </div>
    )
  }
}
export default CurrentAuthor
