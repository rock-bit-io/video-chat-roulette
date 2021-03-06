import React, { Component } from 'react';
import Next from '@material-ui/icons/SkipNext';

import './../css/Buttons.css';

export default class Buttons extends Component {
  render() {
    return (
      <div className="left">
        <div className="buttons">
          <button
            className="start"
            style={{ backgroundColor: this.props.searching || this.props.connected ? '#fd4545' : '#51fd6d' }}
            onClick={this.props.start}
          >
            {this.props.searching || this.props.connected ? 'Stop' : 'Start'}
          </button>
          {(this.props.connected || this.props.disconnected) && (
            <button className="next" onClick={this.props.next}>
              Skip
            </button>
          )}
        </div>
        <span>
          connected:
          <div className="circle" style={{ backgroundColor: this.props.connected ? '#51fd6d' : '#fd4545' }}></div>
        </span>
      </div>
    );
  }
}
