import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:'', content:''};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleTitleChange(e) {
    this.setState({title:e.target.value});
  }
  handleTextareaChange(e) {
    this.setState({content:e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //first check that no property is null then send it to parent
    this.props.handleCreate({title:this.state.title, content:this.state.content});
  }
  handleCancel(e) {
    e.preventDefault();
  }
  render () {
    return (
      <header>
        <h1>Posts</h1>
        <button>New Post</button>
        <form>
          <input onChange={this.handleTitleChange}></input>
          <textarea onChange={this.handleTextareaChange}></textarea>
          <button onClick={this.handleSubmit}>Save</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </header>
    );
  }
}


export default Header;
