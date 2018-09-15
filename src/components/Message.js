import React, {Component} from 'react';

export default class Message extends Component {
  render() {



    
    return (
      <div className="message">
                <span className="message__author">
                    {this.props.message.userName}:
                </span>
        {this.props.message.message}
      </div>
    )
  }
}
