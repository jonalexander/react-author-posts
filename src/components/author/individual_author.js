import React, { Component } from 'react';

class IndividualAuthor extends Component {
  render(){

    return(
      <div className="link-container">
        <a href="#"
           onClick={this.props.handleClickOnAuthor}
           value={this.props.authorData.name}>
           {this.props.authorData.name}
        </a>
      </div>
    )
  }
}
export default IndividualAuthor
