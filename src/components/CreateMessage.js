import React from 'react';

import helper from './Helper';

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message:''};
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFocus = helper.handleFocus.bind(this);
    this.handleBlur = helper.handleBlur.bind(this);

  }
  componentDidMount() {
    //so that we have default values
    const text = document.querySelector("textarea");
    console.log("text arrea", text.defaultValue)
    this.messageDefault = text.defaultValue;
    console.log("input and text arrea", this.messageDefault)
  }

  handleTextareaChange(e) {
    this.setState({message:e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //first check that no property is null then send it to parent
    //this.props.handleSave({title:this.state.title, content:this.state.content});
    if (this.state.message!=="" && this.state.message!==this.messageDefault) {
      this.props.handleSave(this.props.i, this.state.message);//key,new message
      this.props.onClose();
    }

  }

  render () {
    return (
        <form>
          <h3>New comment</h3>
          <textarea onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleTextareaChange} defaultValue="Text" required></textarea><br/>
          <button onClick={this.handleSubmit}>Save</button>
          <button onClick={this.props.onClose}>Cancel</button>
        </form>
    );
  }
}


export default CreateMessage;
