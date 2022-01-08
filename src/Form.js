import React, { Component } from 'react';
import './css/form.css';

export default class Form extends Component {

  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <textarea name="title"  className='boxMessage' placeholder="メッセージ ※必須" /><br/>
          <input className="sendButton"　type="submit" value="送信"></ input>
        </form>
      </div>
    );
  }
}
