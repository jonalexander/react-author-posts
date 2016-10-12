import React, { Component } from 'react';
import IndividualPost from './individual_post';

class ContainerPosts extends Component {
  render(){
    var counter = 0
    var posts = this.props.store.getState().posts

    if (this.props.store.getState().current_author.length > 0) {
        var currentAuthorArray = this.props.store.getState().current_author
        var lastCurrentAuthorId = currentAuthorArray[ currentAuthorArray.length - 1 ].id
    }

    var selectedPosts = posts.map( function(post){
      return(
        <div>
          {lastCurrentAuthorId && post.author_id === lastCurrentAuthorId ?  <IndividualPost key={counter++} postData={post}/> : <div/>}
        </div>
      )})

    return(
      <div>
        {selectedPosts}
      </div>
    )
  }
}

export default ContainerPosts
