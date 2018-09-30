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
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts}, () => console.log('Posts fetched... ', posts)));
  }

  componentWillMount() {
    this.getPosts();
  }

  // adds a new post to the array. Should update database later
  handleAddPost(newPost) {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newPost: newPost
      })
    }).then(res => res.text);
    // .then(this.getPosts()); // test to see if posting and reading updated info on server is correct 

    // update locally
    let posts = this.state.posts;
    posts.unshift(newPost);

    this.setState({posts: posts});
    console.log(`posting ${newPost} to server...`);
  }

  handleDeletePost(post) {

    fetch('/api/posts', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: post.id,
        content: post.content
      })
    }).then(res => res.text)
    // .then(this.getPosts()); // test to see if posting and reading updated info on server is correct 

    // update locally
    let posts = this.state.posts;
    let index = posts.findIndex(x => x.id === post.id);

    posts.splice(index, 1);
    this.setState({posts: posts});
    console.log(this.state.posts);
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
