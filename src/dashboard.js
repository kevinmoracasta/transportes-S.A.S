import { LitElement, html } from "lit-element";
import styleDashboard from '../src/dashboardStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleDashboard];
    }
    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>
        <div class="row ">
        
        <div class="col-sm dashboard o">
            <div class="col-sm b  ">
                <strong><h3>Home</h3></strong>
            </div>
            <hr>
            <div class="col-sm opciones">
                <a href="registroRuta.html" class="fa-solid fa-pen icono" style="text-decoration: none; color: black;">Registrar ruta</a> 
            </div>
            <div class="col-sm opciones">
                <a href="registrarIngreso.html" class="fa-solid fa-pen icono" style="text-decoration: none; color: black;">Registrar ingreso y salida</a>
            </div>
            <div class="col-sm opciones">
                <a href="consultar.html" class="fa-solid fa-pen icono" style="text-decoration: none; color: black;">Consultar Rutas</a>
            </div>
            <div class="col-sm opciones">
                <a href="consultarMapa.html" class="fa-solid fa-pen icono" style="text-decoration: none; color: black;">Consultar mapa</a>
            </div>
            <div class="col-sm opciones">
            <a href="consultarHorarios.html" class="fa-solid fa-pen icono" style="text-decoration: none; color: black;">Consultar Ingreso y salida</a>
        </div>
            <br>
           
        </div>
    
        `
        ;
    }
}
customElements.define('my-dash', MyElement)