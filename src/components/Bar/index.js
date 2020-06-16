import React from "react";

export default class Bar extends React.Component {
  render() {
    const { discountInss, discountIrpf, salarioLiquido } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "right",
          fontSize: "8px",
        }}
      >
        <div title={discountInss.toFixed(2) + "%"}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: discountInss + "%",
            height: "40px",
            backgroundColor: "#e67e22",
            color: "white",
          }}
        >
          {discountInss.toFixed(2) !== '0.00' && discountInss.toFixed(2) + "%"}
        </div>
        <div title={discountIrpf.toFixed(2) + "%"}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: discountIrpf + "%",
            height: "40px",
            backgroundColor: "#c0392b",
          }}
        >
           {discountIrpf.toFixed(2) !== '0.00' && discountIrpf.toFixed(2) + "%"}
        </div>
        <div title={salarioLiquido.toFixed(2) + "%"}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: salarioLiquido + "%",
            height: "40px",
            backgroundColor: "#16a085",
          }}
        >
          {salarioLiquido.toFixed(2) !== '0.00' && salarioLiquido.toFixed(2) + "%"}
        </div>
      </div>
    );
  }
}
