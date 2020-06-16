import React, { Component } from "react";

export default class SalaryCalculate extends Component {
  render() {
    const { inputValue } = this.props;

    return <input id="salarioBruto" type="text" onChange={inputValue} />;
  }
}
