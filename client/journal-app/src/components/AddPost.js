import React, { Component } from 'react';
import uuid from 'uuid';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      newPost: {}
    }
  }

  handleSubmit(event) {
    if (!this.refs.post.value || !this.refs.post.value.trim()) {
      alert('Content is required to submit a post!');
    } else {
      this.setState({newPost: {
        id: uuid.v4(),
        content: this.refs.post.value,
        date: Date.now
      }}, () => {  // callback func
        this.props.addPost(this.state.newPost); // send the post up
      })

      this.refs.post.value = "";
    }

    event.preventDefault(); // prevents default action
  }

  render() {
    let inputStyle = {
      'height': '200px',
      'width': '400px',
      'border': 'solid 1px black'
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea type="text" ref="post" style={inputStyle} placeholder="type a post"/>
          <br />
          <input className="btn btn-primary btn-sm" type="submit" value="Submit" /> 
        </form>
      </div>
    );
  }
}

export default AddPost;
