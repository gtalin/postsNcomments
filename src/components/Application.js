import React from 'react';

import Header from './Header';
import Posts from './Posts';
import Modal from './Modal';

import CreatePost from './CreatePost';

import '../styles/main.scss'


class Application extends React.Component {
  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      posts : [{"title":"Shiny new Post",
      "content": "content content some more content content content content content content",
      "comments":["coment1", "comment2", "comment3"],
    "date": new Date("January 26, 2018")},
    {"title":"Commentless Post",
    "content": "content content some more content content content content content content",
    "comments":[],
  "date": new Date("January 10, 2018")},
      {"title":"Some Post",
      "content": "content content some more content",
      "comments":["coment1", "comment2"], "date":new Date("January 6, 2018")},
      {"title":"Post Title",
      "content": "content content some more content content content content",
      "comments":["coment", "longer comment", "Further longer comment"], "date":new Date("October 26, 2017")}
    ]
    }

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }
  handleCreate(post) {
    //create posts
    //create comments
    console.log("from child post elements", post);
    console.log("current state", this);
    //initialize with empty string for comments
    post["comments"] = [];
    post["date"] = new Date();
    //Capitalize title while creating
    post["title"] = post["title"][0].toUpperCase().concat(post["title"].slice(1))//to capitalize
    this.setState({posts: [post,...this.state.posts]});
    //changed order of adding so that latest is on top
  }
  handleDelete(key) {
    //delete element if it's comments don't exist
    //else display an error Message
    //delete the clicked element

    if (this.state.posts[key].comments.length===0)
      this.setState({posts: this.state.posts.slice(0,key).concat(this.state.posts.slice(key+1))});
    else {
      alert("This post has comments. Cannot delete!");
    }
  }
  handleAddComment(key,comment) {
    //will open a modal and depending on save or cancel
    //option selected in there, we'll execute this function

    let ele2modify = this.state.posts[key];
    let commentsAtKey = [...ele2modify.comments,comment]

    let eleAtKey = {title:ele2modify.title,
      content:ele2modify.content, date:ele2modify.date,
      comments: commentsAtKey};
    let newPosts = [...this.state.posts.slice(0,key).concat(eleAtKey).concat(this.state.posts.slice(key+1))];
    //newPosts = newPosts.concat({})

    this.setState({posts:newPosts})
  }
  render() {

    return (
      <div>
        <header>
          <h1>Posts</h1>
          <Modal handleSave={this.handleCreate} icon={<span><i className="fa fa-envelope-o"/> new post</span>} modalContent={CreatePost}/>
        </header>
        <Posts posts={this.state.posts} delete={this.handleDelete} addComment={this.handleAddComment} />
      </div>
    )
  }
}

export default Application;
