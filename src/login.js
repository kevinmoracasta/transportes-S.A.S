import { LitElement, html } from "lit-element";
import stylesScss from './loginStyle';



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
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
       
      <div class="card card">
        <div class="card-header titulo">
           <h1 style="font-size: 50px;"> Transporte S.A.S</h1>
        </div>
        <div class="card-body">
            
            <form @submit="${this._handleSubmit}"class="formulario">
               
                <br>
                <div class="form-group form" >
                    
                    <input type="text" id="username" name="username" placeholder="Usuario" required>
                </div>
                <br>
                <br>
                <div class="form-group form">
            
                    <input type="password" id="password" name="password" placeholder="Password" required>
                </div>
                <br>
                <br>
                <div class="button">
                    <button style="border-color: rgb(111, 154, 246);" type="submit" class="btn btn-primary boton "><a href="registroRuta.html" style="color: rgb(111, 154, 246); text-decoration: none;">.</a>INGRESAR</button>
                    <p></p>
                    <a href="registroRuta.html" style="color: black; text-decoration: none;">Olvide mi contraseña..</a>
                    <p></p>
                    <a href="registrarme.html" style="font-size:20% color: blue; text-decoration: none;">No tengo cuenta, registrarme</a>
                </div>
            </div>
        
        
            </form>
        </div>
      </div>

   
  <div class="col-sm"></div>
</div>
</body>
</html>

        `;
    }
    _handleSubmit(event) {
        event.preventDefault();
    
        const username = this.shadowRoot.getElementById('username').value;
        const password = this.shadowRoot.getElementById('password').value;
    
        // Validación con datos quemados (usuario: admin, contraseña: password)
        if (username === 'transportes' && password === 'trans123') {
          // Inicio de sesión exitoso
        
          window.location.href='/registroRuta.html'

          // Puedes emitir un evento personalizado aquí si es necesario
        } else {
          // Inicio de sesión fallido
          alert('Inicio de sesión fallido. Verifica tus credenciales.');
          // Puedes emitir un evento personalizado aquí si es necesario
        }
      }
}

customElements.define('my-login', MyElement);