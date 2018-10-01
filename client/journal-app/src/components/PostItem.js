import React, { Component } from 'react';
import { Button } from 'reactstrap';

// displays a single post's content
class PostItem extends Component {
  deletePost(post) {
    this.props.onDelete(post);
  }

  render() {
    let pstyle = {
      'wordWrap': 'break-word'
    };

    return (
      <div>
        <Button className="btn btn-danger btn-sm" onClick={this.deletePost.bind(this, this.props.post)}>X</Button>
        <div>
          <p style={pstyle}>{this.props.post.content}</p>
        </div>
        
      </div>
    );
  }
}

export default PostItem;
