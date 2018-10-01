import React, { Component } from 'react';
import PostItem from './PostItem';

class Posts extends Component {

  deletePost(post) {
    this.props.onDelete(post);
  }

  render() {
    let postItems;  // store all posts into an array of PostItem

    if (this.props.posts) {
      postItems = this.props.posts.map(post => {
        return (
          <PostItem onDelete={this.deletePost.bind(this)} key={post.id} post={post} />
        );
      });
    }

    return (
      <div>
        <h3><strong>Posts</strong></h3>
        {postItems} 
      </div>
    );
  }
}

export default Posts;
