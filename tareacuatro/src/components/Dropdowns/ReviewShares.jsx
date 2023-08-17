import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";





function ReviewShares() {
     const current = new Date();
     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <>
        <h1>Revisar Acciones</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>Tus Acciones</th>
                    <th>Valor tus Acciones</th> 
                    <th>Valor en Mercado</th>
                    <th>Fecha</th>
                 </tr>    
            </thead>
            <tbody>
                <tr>
                    <td>6</td>
                    <td>$8000.00</td>
                    <td>$1600.00</td>
                    <td className="datecomponent">{date}</td>
                </tr>
            </tbody>

        </table>
        </>
  );
};

export default ReviewShares