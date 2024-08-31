import React, { Component } from 'react'

export default class Circle extends Component {
  render() {
    const { height, width, color } = this.props;
    return (
      <div 
      className="circle"
      style={ {
        'background-color': color,
        'border-radius': '50%',
        height,
        width,
        position: 'relative',
        top: '50%',
        right: '15%',
      }
      }
      />
    )
  }
}
