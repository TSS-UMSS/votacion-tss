import React, { Component } from "react";
import Pie from "./charts/pie";
import Bar from "./charts/bar";
import Tabla from "./charts/tabla";
import ReactToPrint from "react-to-print";

import { Container } from "react-bootstrap";

export default class home extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <a href="#">Version 🖨️ Imprimir</a>;
          }}
          content={() => this.componentRef}
          documentTitle="new document"
          pageStyle="print"
        />
        <Container ref={(el) => (this.componentRef = el)}>
          <Tabla />
          <Pie />
          <Bar />
        </Container>
      </div>
    );
  }
}
