import { LitElement, html } from "lit-element";
import login_style from './ingresoysalidaStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[login_style];
    }
    constructor() {
        super();
        this.dialogMessage = "";
        this.nombre = localStorage.getItem("nombre") || "";
        this.apellido = localStorage.getItem("apellido") || "";
        this.placa = localStorage.getItem("placa") || "";
        this.horaI = localStorage.getItem("horaI") || "";
        this.horaS =localStorage.getItem("horaS") || "";
        
      }
    
      handleSubmit() {
        this.nombre = this.shadowRoot.querySelector("#nombre").value;
        this.apellido = this.shadowRoot.querySelector("#apellido").value;
        this.placa = this.shadowRoot.querySelector("#placa").value;
        this.horaI = this.shadowRoot.querySelector("#horaI").value;
        this.horaS = this.shadowRoot.querySelector("#horaS").value;
        
    
        let data = {
          nombre: this.nombre,
          apellido: this.apellido,
          placa: this.placa,
          horaI: this.horaI,
          horaS: this.horaS,
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
        
          <html lang="en">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>

            <body>
              
              <div class="container-fluid">
    <div class="row">
        <div clas="col-sm-1"></div>
        <div class="col-sm-10 text-center">
           <img src="" class="logo-index-login">
        </div>
        <div clas="col-sm-1"></div>
    </div>

    <div class="row">
        <div class="col-sm-4">
            
        </div>
        <div class="col-sm-4">

            <div class="card bg-body-danger card-box">
                <div class="port ">
                    <div class="text-center">
                        <h3>
                            Registrar ingreso 
                        </h3 >
                    </div>
                </div>
                
                <form class="card-login" method="post" action="">

                    <br>

                    <div class="form-floating mb-3">
                        
                    <input type="text" class="form-control" id="nombre" value="${this.nombre}" placeholder="Nombre">
                        <label for="floatingInput">Nombre</label>
                      </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                        <label for="floatingInput">Apellido</label>
                      </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="placa" placeholder="No. placa">
                        <label for="floatingInput">Placa</label>
                      </div>
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control" id="horaI" placeholder="Hora de ingreso">
                        <label for="floatingInput">Hora de ingreso</label>
                      </div>
                    
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control" id="horaS" placeholder="Hora de salida">
                        <label for="floatingInput">Hora de salida</label>
                      </div>
                    <br>
                    <div class="text-center">
                            <a
                              @click="${(e) => 
                                this.handleSubmit()
                              }"
                            class="my-button"
                            href="registrarIngreso.html"
                            >  
                            Registrar
                            </a>
                            

                                            </div>
                    
        
                    
                </form>
            </div>

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
    
customElements.define('my-form2', MyElement)

