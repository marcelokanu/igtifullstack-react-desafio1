import React, { Component } from "react";

export default class InputReadOnly extends Component {
  
  render() {
    const {value} = this.props;
    return (
          <input id="input" type="text" value={value} className="validate" disabled />
    );
  }
}
