import React, { Component } from 'react';
import Header from './components/Header';
import AddPost from './components/AddPost';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  getPosts() {
    let posts = [
      {
        id: '1',
        content: 'hello'
      },
      {
        id: '2',
        content: 'goodbye'
      },
      {
        id: '3',
        content: 'Third post'
      }
    ];

    this.setState({posts: posts});
  }

  componentWillMount() {
    this.getPosts();
  }

  handleAddPost(newPost) {
    let posts = this.state.posts;
    posts.unshift(newPost);

    this.setState({posts: posts});
    console.log(this.state.posts);
  }

  render() {
    return (
      <div className="App">
      <Header />
      <AddPost addPost={this.handleAddPost.bind(this)} />
      {//<Posts posts={this.state.posts} />
      }
      </div>
    );
  }
}

export default App;
