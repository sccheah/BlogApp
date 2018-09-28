import React, { Component } from 'react';

// displays a single post's content
class PostItem extends Component {

  deletePost(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <div>
        <button onClick={this.deletePost.bind(this, this.props.post.id)}>X</button>
        {this.props.post.content}
      </div>
    );
  }
}

export default PostItem;
