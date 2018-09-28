import React, { Component } from 'react';
import Header from './components/Header';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  // should make an API call to server to retrieve posts from database later
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

  // adds a new post to the array. Should update database later
  handleAddPost(newPost) {
    let posts = this.state.posts;
    posts.unshift(newPost);

    this.setState({posts: posts});
    console.log(this.state.posts);
  }

  handleDeletePost(id) {
    let posts = this.state.posts;
    let index = posts.findIndex(post => post.id === id);

    posts.splice(index, 1);
    this.setState({posts: posts});
  }

  render() {
    return (
      <div className="App">
      <Header />
      <AddPost addPost={this.handleAddPost.bind(this)} />
      <Posts onDelete={this.handleDeletePost.bind(this)} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
