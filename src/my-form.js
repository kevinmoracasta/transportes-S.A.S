import { LitElement, html } from "lit-element";
import styleLogin from '../src/my-formStyle'

export class MyElement extends LitElement{

    static get styles(){
        return [styleLogin];
    }
    constructor() {
        super();
        this.dialogMessage = "";
        this.nombreRuta = localStorage.getItem("nombreRuta") || "";
        this.InicioRuta = localStorage.getItem("InicioRuta") || "";
        this.FinRuta = localStorage.getItem("FinRuta") || "";
        this.Hora = localStorage.getItem("Hora") || "";
        this.consorcio =localStorage.getItem("consorcio") || "";
        
      }
    
      handleSubmit() {
        this.nombreRuta = this.shadowRoot.querySelector("#nombreRuta").value;
        this.InicioRuta = this.shadowRoot.querySelector("#InicioRuta").value;
        this.FinRuta = this.shadowRoot.querySelector("#FinRuta").value;
        this.Hora = this.shadowRoot.querySelector("#Hora").value;
        this.consorcio = this.shadowRoot.querySelector("#consorcio").value;
        
    
        let data = {
            nombreRuta: this.nombreRuta,
            InicioRuta: this.InicioRuta,
            FinRuta: this.FinRuta,
            Hora: this.Hora,
            consorcio: this.consorcio,
        };
    
        console.log(data);
    
        localStorage.setItem("transporte", JSON.stringify(data));
        this.dialogMessage = "Los datos se han guardado correctamente.";
      }
    
      closeDialog() {
        this.dialogMessage = "";
      }
      render() {
        return html`
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <title>REGISTRO VEHICULO</title>
        </head>
        <body>

            <nav class="row" >

                <nav class="col-sm" >
                    <div class="row" > 

                        
                    </div>

                    <div class="card card reg">
                        
                        <a href="#""><div class="card-header titulo til"><img src="img/x.png" width="20px" height="20px" text-align:left"></a>

                            <center><h1> Registar </h1><h3>ruta</h3></center>
                            <center>-------<img src="img/autobus-escolar.png" width="20%" height="20%" style="float: center;">------</center>
                            <center>_______________________________________</center>

                        </div>
                        <div class="card-body ">
                            
                            <form class="formulario" @submit="${this._handleSubmit}">
                            
                                <div class="form-group form" >
                                    <center style="font-size: 25px;"> Ruta</center>
                                    
                                    <center><input id="nombreRuta" type="text" value="${this.nombreRuta}"class="p" name="Nombre ruta" placeholder="Nombre ruta" required></center>
                                </div>
                                
                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Lugar Inicio ruta</center>
                                    
                                    <center><input id="InicioRuta" type="text" class="p" name="Lugar Inicio ruta" placeholder="Lugar Inicio ruta" required></center>
                                </div>

                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Lugar Fin ruta</center>
                                    
                                    <center><input id="FinRuta" type="text" class="p" name=" Lugar Fin ruta" placeholder="Lugar Fin ruta" required></center>
                                </div>

                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Horario</center>
                                    
                                    <center><input type="text" id="Hora" class="p" name="Horario" placeholder="Horario" required></center>
                                </div>

                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Consorcio</center>
                                    
                                    <center><input type="text" id="consorcio" class="p" name="Consorcio" placeholder="Consorcio" required></center>
                                </div>
                                
                                <br>
                    <div class="text-center">
                            <a
                              @click="${(e) => 
                                this.handleSubmit()
                              }"
                            class="my-button"
                            href="registroRuta.html"
                            >  
                            Registrar
                            </a>
                            

                                            </div>
                        
                            </form>
                        </div>
                    </div>


                    





              <br />
              <br />
              <!-- Cuadro de diálogo -->
              ${this.dialogMessage
                ? html`
                    <div class="dialog-overlay">
                      <div class="dialog-box">
                        <p>${this.dialogMessage}</p>
                        <button @click="${this.closeDialog}">Cerrar</button>
                      </div>
                    </div>
                  `
                : ""}
            </body>
          </html>
        `;
      }
    }
                    
     

customElements.define('my-form', MyElement)