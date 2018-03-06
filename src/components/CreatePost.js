import React from 'react';

import helper from './Helper';//for handleFocus and handleBlur

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:'', content:''};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFocus = helper.handleFocus.bind(this);
    this.handleBlur = helper.handleBlur.bind(this);

    //let inputDefault, textDefault;
  }
  componentDidMount() {
    //so that we have default values
    const input = document.querySelector("input");
    const text = document.querySelector("textarea");
    this.titleDefault = input.defaultValue;
    this.contentDefault = text.defaultValue;
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
    console.log("this in modal is", this);
    if (this.state.title!=="" && this.state.content!==""
    && this.state.title!==this.titleDefault && this.state.content!==this.contentDefault) {
      this.props.handleSave({title:this.state.title, content:this.state.content});
      this.props.onClose();
    }
  }

  render () {
    return (
        <form>
          <h3>New post</h3>
          <input onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleTitleChange} defaultValue="Headline" required/><br/>
          <textarea onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleTextareaChange} defaultValue="Text" required></textarea><br/>
          <button onClick={this.handleSubmit}>Save</button>
          <button onClick={this.props.onClose}>Cancel</button>
        </form>
    );
  }
}


export default CreatePost;
