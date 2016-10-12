import React, { Component } from 'react';
import './App.css';
import '/'

import FormAuthor from './components/author/form_author';
import FormPost from './components/post/form_post';
import ContainerAuthors from './components/author/container_authors';
import ContainerPosts from './components/post/container_posts'
import CurrentAuthor from './components/author/current_author';



class App extends Component {
  // {this.props.store}

  render() {
    return (
      <div className="App">
        <div className="container">

        <div className="left-half">
          <div className="Author">
            <FormAuthor store={this.props.store}/>
            <ContainerAuthors store={this.props.store}/>
          </div>
        </div>

        <div className="right-half">
          <CurrentAuthor store={this.props.store}/>
          <div className="Post">
            <div>
              <FormPost store={this.props.store} />
            </div>
            <div>
              <ContainerPosts store={this.props.store}/>
            </div>
          </div>
        </div>

        </ div>
      </ div>
    );
  }
}


export default App;
