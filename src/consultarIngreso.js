import { LitElement, html } from "lit-element";
import stylesScss from './consultarIngresoStyle';



export class MyElement extends LitElement { 
    static get styles() {
        return [stylesScss];
    }
    render() {
        return html`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="login.css">

</head>
<body> 
<nav class="col-sm-11">
<table class="table" style="margin:2%; margin-top:5%; "  >
<thead>
  <tr>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Placa</th>
    <th scope="col">Hora ingreso</th>
    <th scope="col">Hora salida</th>
  </tr>
</thead>
<tbody>
  <tr class="table-primary">
    <th scope="row">Carlos</th>
    <td>Martinez</td>
    <td>HAO123</td>
    <td>12:30</td>
    <td>8:20</td>
  </tr>
  <tr class="table-light">
    <th scope="row">Eimmy</th>
    <td>Lopez</td>
    <td>KEV123</td>
    <td>7:00</td>
    <td>12:00</td>
  </tr>
  <tr class="table-primary">
  <th scope="row">Johan</th>
  <td>Bolivar</td>
  <td>BNQ146</td>
  <td>8:10</td>
  <td>11:30</td>
</tr>
<tr class="table-light">
  <th scope="row">Kevin</th>
  <td>Rey</td>
  <td>PRO001</td>
  <td>6:30</td>
  <td>3:00</td>
</tr>


</tbody>
</table>
</nav>

</body>
</html>

        `;
    }
}

customElements.define('my-consultation', MyElement);