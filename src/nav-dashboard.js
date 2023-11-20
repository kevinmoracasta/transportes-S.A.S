import { LitElement, html } from "lit-element";
import styleNav from '../src/navStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleNav];
    }
    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <header style="box-shadow: 5px 5px 5px rgb(82, 82, 82);">
        <img src="../img/bus.png" alt="Servicios de transportes" class="logo" style="border: 3px solid #000;">
        <h3 style="margin-right:38%">TRANSPORTES S.A.S</h3>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="Index.html">Cerrar Sesion</a></li>
            </ul>
        </nav>
        </header>
        `
        ;
    }
}
customElements.define('my-nav2', MyElement)