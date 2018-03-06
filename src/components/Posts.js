import React from 'react';
import Post from './Post';

//import baseStyles from '../styles/_base.css'

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    
  }
  handleDelete(key) {
    //e.preventDefault();
    console.log("what is this in delete", key);
    this.props.delete(key);
  }

  render() {
    const listStyle = {
      backgroundColor: '#ff0',
      color: "#f00",
      listStyle: "none"
    };
    const posts = this.props.posts.map((ele,i) => {
      //return (<h2>{ele.title}</h2>)
      console.log(ele);
      let comments = "";

      comments = ele.comments.map((el)=>(<li>{el}</li>));

      return (<Post ele={ele} i={i} comments={comments} handleDelete={this.handleDelete} handleAddComment={this.props.addComment}>
      </Post>)
    });
    console.log(posts);
    return (
        <ul>{posts}</ul>
    )
  }
}

export default Posts;
