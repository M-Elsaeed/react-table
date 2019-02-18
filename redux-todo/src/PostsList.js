import React,{Component} from "react";

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts, loading, error } = this.props.postsList;

    return (
      loading ?
        <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
        :
        error ?
          <div className="alert alert-danger">Error: {error.message}</div>
          :
          <div className="container">
            <h1>Posts</h1>
            <ul className="list-group">
              {posts.map((post) => <li key={post} >{post.title}</li>)}
            </ul>
          </div>
    )
  }
}

export default PostsList;