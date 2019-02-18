import React, { Component } from "react";

class PostsList extends Component {
  render() {
    const { posts, loading, error } = this.props.postsList;

    if (loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          {
            this.posts.map((item) => {
              return posts.map((post) => {
                return (
                  <li className="list-group-item" key={post._id}>
                    <h3 className="list-group-item-heading">{post.title}</h3>
                  </li>
                );
              });
            }
            )
          }
        </ul>
      </div>
    );
  }
}

export default PostsList;