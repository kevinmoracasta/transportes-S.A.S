import { LitElement, html } from "lit-element";
import styleRutas from '../src/rutasConsuStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleRutas];
    }
    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>
        <div class="col-sm">
            <div class="card rutas" style="width: 70%; margin-top:-5%">
                <img src="../img/bus1.png" class="card-img-top img" alt="..." style="width:50%;height: 50%;margin-top: 3%;" >
                
                <div class="card-body">
                  <h5 class="card-title" style="text-align: center;">B18</h5>
                  <h5 class="card-title" style="text-align: center;">Terminal</h5>
                  <a href="consultarMapa.html" class="btn btn-primary boton">Consultar ruta</a>
                </div>
              </div>
              <div class="card rutas" style="width: 70%;">
                <img src="../img/bus1.png" class="card-img-top img" alt="..." style="width:50%;height: 50%;margin-top: 3%;" >
                
                <div class="card-body">
                  <h5 class="card-title" style="text-align: center;">D81</h5>
                  <h5 class="card-title" style="text-align: center;">Puente Guadua</h5>
                  <a href="consultarMapa.html" class="btn btn-primary boton">Consultar ruta</a>
                </div>
              </div>
        </div>

        `
        ;
    }
}
customElements.define('my-routes', MyElement)