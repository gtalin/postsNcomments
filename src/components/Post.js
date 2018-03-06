import React from 'react';
import Modal from './Modal';
import CreateMessage from './CreateMessage';

import '../styles/post.scss'

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {expandOpen : false};
    this.togglePost = this.togglePost.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }
  handleDelete(key) {
    //e.preventDefault();
    console.log("what is this in delete", key);
    this.props.delete(key);
  }
  handleAddComment(key) {
    //open modal form
    //execute the next statement only when we click save on modal
    this.props.addComment(key, "default something");
  }
  togglePost(e) {
    //toggle only if h2 is the target element
    if (e.target.tagName==="H2")
      this.setState({expandOpen:!this.state.expandOpen})
  }
  render() {
    const listStyle = {
      backgroundColor: '#ff0',
      color: "#f00",
      listStyle: "none"
    };

    //For date
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    let day = this.props.ele.date.getDate();
    //left padding of 0 for single digit date
    if (day<10) {
      day = "0".concat(day);
    }
    const monthN = this.props.ele.date.getUTCMonth();
    const month = months[monthN];
    const aside = (<aside><span className="date">{day}.</span><br/><span>{month}</span></aside>)
    //const aside=(<aside></aside>)
    //console.log("this.props.addComment", aside);

    //Expand or not
    if (!this.state.expandOpen) {
      return (
        <li key={"li".concat(this.props.i)} className="postList" >
          {aside}
          <section>
            <article>
            <h2 onClick={this.togglePost}>{this.props.ele.title}
             <div class="buttons">
              <button key={"del".concat(this.props.i)} onClick={(e)=>{e.stopPropagation();return this.props.handleDelete(this.props.i)}}><i className="fa fa-close"/></button>
              <Modal key={"add".concat(this.props.i)} icon={<i className="fa fa-commenting"></i>} handleSave={this.props.handleAddComment} i={this.props.i} modalContent={CreateMessage}/>
              </div>
            </h2>
            </article>
          </section>
        </li>)
    }
      return (
        <li key={"li".concat(this.props.i)} className="postList" >
          {aside}
          <section>
            <article>
              <h2 onClick={this.togglePost}> {this.props.ele.title}
                <div class="buttons">
                  <button key={"del".concat(this.props.i)} onClick={(e)=>{e.stopPropagation();return this.props.handleDelete(this.props.i)}}><i className="fa fa-close"/></button>
                  <Modal key={"add".concat(this.props.i)} icon={<i className="fa fa-commenting"></i>} handleSave={this.props.handleAddComment} i={this.props.i} modalContent={CreateMessage}/>
                </div>
               </h2>
              <p>{this.props.ele.content}</p>
            </article>
            <ul>{this.props.comments}</ul>

          </section>
        </li>)

  }
}

export default Post;
