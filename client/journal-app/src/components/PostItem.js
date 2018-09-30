import React, { Component } from 'react';

// displays a single post's content
class PostItem extends Component {

  deletePost(post) {
    this.props.onDelete(post);
  }

  render() {
    return (
      <div>
        <button onClick={this.deletePost.bind(this, this.props.post)}>X</button>
        {this.props.post.content}
      </div>
    );
  }
}

export default PostItem;
