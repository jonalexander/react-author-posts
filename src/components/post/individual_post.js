import React, { Component } from 'react';
class IndividualPost extends Component {
  render(){
    return(
      <div>
        <div className="post-title-display">
          <h5> {this.props.postData.title} </h5>
        </div>
        <div className="post-body-display">
          <p> {this.props.postData.text} </p>
        </div>
      </div>
    )
  }
}

export default IndividualPost
