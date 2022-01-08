import React from 'react';
import PostedPartBody from './PostedPartBody';
import './css/todo.css';

class InputPartBody extends React.Component {
  handleClickPost(){
    this.setState({isModalOpen: true});
  }

  handleClickReply(){
    this.setState({isModalOpen: false});
  }

  constructor(props){
      super(props);
      this.state={isModalOpen: false}
  };

  render(){
    let modal;
    if(this.state.isModalOpen){
      modal = (
        <div>
          <div>
            <PostedPartBody />
          </div>
          <button
            className="closeReply"　
            onClick={() =>{this.handleClickReply()}}
          >
            クリア
          </button>
        </div>
      );
    }

    return(
      <div>
          <div className='modal2' onClick={() =>{this.handleClickPost()}}>
            <button　className='replyButton'>返信する</button>
          </div>
          {modal}
      </div>


    )
  }

  }

export default InputPartBody;
