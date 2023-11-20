import { LitElement, html } from "lit-element";
import stylesScss from './navStyle';



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
    <link rel="stylesheet" href="index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
<header style=" box-shadow: 5px 5px 5px rgb(82, 82, 82); ">
<img src="../img/bus.png" alt="Servicios de transportes" class="logo" style="border: 3px solid #000;">
<h3 style="margin-right:38%">TRANSPORTES S.A.S</h3>
<nav >
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="login.html">Iniciar Sesion</a></li>
    </ul>
</nav>
</header>
    <div class="row">
        <div class="col-sm-7" style="padding: 10%; padding-top: 3%; margin:2%; padding-bottom: 3%; background-color: #6cacff;">
            <section id="MISION">
                <article>
                   <center> <h2>
                        Misión
                    </h2></center>
                    <p>
                        Ser una empresa competitiva en el servicio público de transporte, comprometida en el mejoramiento
                        continuo a fin de fidelizar a sus clientes a través de la estrategia organizacional, parque
                        automotor renovado, tecnología de vanguardia y sustentabilidad con el medio ambiente, propendiendo
                        por el desarrollo económico y social.
                        <center><img src="img/R.jpg" width="500" height="200"></center>
                    </p>
    
                </article>
            </section>
        </div>

        <div class="col-sm" style="padding: 10%; padding-top: 3%; margin-top:3%; margin:2%; padding-bottom: 3%; background-color: #6cacff;">
            <aside>
                <center><h2> Nuestros servicios </h2></center>
                <center>
                    <h6 style="margin-top: 8%;">Servicio Premium Vip</h6>
                </center>
                <center><img src="img/transporte-publico.png" width="50" height="50"></center>
                <center>
                    <h6 style="margin-top: 8%;">Servicio Diamante</h6>
                </center>
                <center><img src="img/transporte-publico.png" width="50" height="50"></center>
                <center>
                    <h6 style="margin-top: 8%;">Servicio Platino Plus</h6>
                </center>
                <center><img src="img/transporte-publico.png" width="50" height="50"></center>
                <center><a href="#" class="btn btn-primary" style="margin: 5%;">Ver más</a>
                </center>
            </aside>
    
        </div>

    </div>
        
        
        <center><img src="img/Sin título2.png"  width="95%" height="200" style="border: 2px solid gray; "></center>

      
</body>
</html>
        `;
    }
}

customElements.define('my-element', MyElement);