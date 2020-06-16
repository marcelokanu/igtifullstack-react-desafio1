import React, { Component } from "react";

import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import Bar from "./components/Bar";

import { calculateSalaryFrom } from "./services/CalcSalary";

import { formatNumber } from "./helpers/format-helpers";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salarioBruto: 0,
      baseInss: 0,
      descontoInss: 0,
      percentInss: 0,
      baseIrpf: 0,
      descontoIrpf: 0,
      percentIrpf: 0,
      salarioLiquido: 0,
      percentSalarioLiquido: 0,
    };
  }

  handleChangeValue = (event) => {
    this.setState({ salarioBruto: event.target.value });
  };

  handleCalculate = () => {
    const { salarioBruto } = this.state;

    const result = calculateSalaryFrom(salarioBruto);

    this.setState({
      salarioBruto: formatNumber(salarioBruto),
      baseInss: formatNumber(result.baseINSS),
      descontoInss: formatNumber(result.discountINSS),
      baseIrpf: formatNumber(result.baseIRPF),
      descontoIrpf: formatNumber(result.discountIRPF),
      salarioLiquido: formatNumber(result.netSalary),
      percentInss: (result.discountINSS / salarioBruto) * 100,
      percentIrpf: (result.discountIRPF / salarioBruto) * 100,
      percentSalarioLiquido: (result.netSalary / salarioBruto) * 100,
    });
  };

  render() {
    const {
      baseInss,
      descontoInss,
      baseIrpf,
      descontoIrpf,
      salarioLiquido,
      percentInss,
      percentIrpf,
      percentSalarioLiquido,
    } = this.state;

    return (
      <div className="container">
        <h3 className="center">Cálculo Salarial</h3>
        <div className="row">
          <div className="input-field col s11">
            <i className="material-icons prefix blue-text text-darken-1">
              attach_money
            </i>

            <InputFullSalary inputValue={this.handleChangeValue} />

            <label
              className="active blue-text text-darken-1"
              htmlFor="salarioBruto"
            >
              Digite o salário bruto
            </label>
          </div>
          <div className="input-field col s1">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.handleCalculate}
            >
              <i className="small material-icons">chevron_right</i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix teal-text text-lighten-3">
              attach_money
            </i>
            <InputReadOnly value={salarioLiquido} />
            <label
              className="active teal-text text-lighten-3"
              htmlFor="salarioLiquido"
            >
              Salário Liquido
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix orange-text text-lighten-2">
              money_off
            </i>
            <InputReadOnly value={baseInss} />
            <label
              className="active orange-text text-lighten-2"
              htmlFor="baseInss"
            >
              Base Inss
            </label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix orange-text text-lighten-2">
              money_off
            </i>
            <InputReadOnly value={descontoInss} />
            <label
              className="active orange-text text-lighten-2"
              htmlFor="descontoInss"
            >
              Desconto Inss
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix red-text text-lighten-3">
              money_off
            </i>
            <InputReadOnly value={baseIrpf} />
            <label
              className="active red-text text-lighten-3"
              htmlFor="baseIrpf"
            >
              Base IRPF
            </label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix red-text text-lighten-3">
              money_off
            </i>
            <InputReadOnly value={descontoIrpf} />
            <label
              className="active red-text text-lighten-3"
              htmlFor="descontoIrpf"
            >
              Desconto IRPF
            </label>
          </div>
        </div>
        <Bar
          discountInss={percentInss}
          discountIrpf={percentIrpf}
          salarioLiquido={percentSalarioLiquido}
        />
      </div>
    );
  }
}
