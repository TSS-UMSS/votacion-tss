//import { render } from '@testing-library/react';
import React, { Component } from "react";

//import { async } from '@firebase/util';
//import { doc } from 'firebase/firestore';
//import {getUrna} from '../confs/firebaseConf';
import { firestore } from "../confs/firebaseConf";

import { collection, query, where, getDocs } from "firebase/firestore";
//import NoDisponible from './NoDisponible'
import "../Styles/urna.css";
import { async } from "@firebase/util";
import ReactToPrint from "react-to-print";
import { Table } from "react-bootstrap";

export default class urna extends Component {
  componentDidMount() {
    insertData();
  }

  //thevoters = consultar();
  render() {
    /*if(this.thevoters.size === 0){
      return(
        <NoDisponible mensaje="Los datos de la urna electoral aún no se encuentran disponibles."/>
      );
    }else{*/
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return (
              <a href="#" className="imprimir">
                🖨️ Imprimir{" "}
              </a>
            );
          }}
          content={() => this.componentRef}
          documentTitle="Esto es un documento"
          pageStyle="print"
        />
        <div ref={(el) => (this.componentRef = el)}>
          <div className="title-urna">Urna Electoral</div>
          <Table striped bordered hover>
            <thead>
              <th>Hash del voto</th>
              <th>Elector</th>
              <th>Voto</th>
              <th>Fecha y Hora</th>
            </thead>
            <tbody id="dataTablee"></tbody>
          </Table>
        </div>
      </div>
    );
  }
}

async function insertData(thevoters) {
  console.log("Se ejecuta insertData()");
  //const querySnapshot = await getUrna()
  const thequery = query(
    collection(firestore, "UsuarioComun"),
    where("VotoEstado", "==", true)
  );
  const voters = await getDocs(thequery);

  let shtml = "";
  const dataTable = document.getElementById("dataTablee");

  voters.forEach((doc) => {
    var firedate = doc.data().VotoFecha;
    //var reactdate = firedate.toDate();
    //var thedate = reactdate.toLocaleString();

    var voto;

    if (doc.data().VotoBlanco === 1) {
      voto = "Blanco";
    } else {
      if (doc.data().VotoNulo === 1) {
        voto = "Nulo";
      } else {
        voto = doc.data().VotoPartidoSigla;
      }
    }

    shtml += `
            <tr>
            <td>${doc.data().VotoHash}</td>
            <td>${doc.data().HashSemilla}</td>
            <td>${voto}</td>
            <td>${firedate}</td>
            </tr>
        `;
  });

  dataTable.innerHTML = shtml;
}
