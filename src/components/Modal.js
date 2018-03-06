import React from 'react';
import CreatePost from './CreatePost';

import '../styles/modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isOpen:false};
    this.toggleModal = this.toggleModal.bind(this);

  }
  toggleModal(e) {
    //e.stopPropagation();//so that h2 doesn't expand;
    //but we're executing this function even on closing modal
    //e.stopPropagation();
    console.log("Modal should toggle now");
    this.setState({isOpen:!this.state.isOpen})
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>{this.props.icon}</button>
        <ModalWrapper i={this.props.i} show={this.state.isOpen} modalContent={this.props.modalContent} handleSave={this.props.handleSave} onClose={this.toggleModal}></ModalWrapper>
      </div>
    )
  }
}

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //What the modal window displays should be customizable
    //should be able to pass props
    if(!this.props.show) {
      return null;
    }

   const Content = this.props.modalContent;
   //this.props.i is for CreateMessage
   console.log("check i", this.props.i);
    return (
      <div className="backdrop">
        <div className="modal">
          <Content i={this.props.i} handleSave={this.props.handleSave} onClose={this.props.onClose}></Content>
        </div>
      </div>
    )
  }
}

export default Modal;
