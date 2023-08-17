import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Table } from "react-bootstrap";
import "./indexSell.css"

function SellShares() {
    return (
      <main className="body">
      <h1>Vender Acciones </h1>
        <InputGroup>
          <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
        <Table striped>
            <thead>
                <tr>
                <th>Tus Fondos</th>
                <th>Tus Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>valor$$</td>
                    <td>cantidad$</td>
                </tr>
            </tbody>
            
        </Table>
      </main>
    );
  }
  
  export default SellShares;