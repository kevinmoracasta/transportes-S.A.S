import {css} from "lit-element";

export default css`

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

header {
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  
   
}


nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin: 0 15px;
}

nav a {
    text-decoration: none;
    color: black;
}

/* Estilo para el menú desplegable en pantallas pequeñas */
@media (max-width: 768px) {
    nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 50px;
        left: 0;
        background-color: #333;
        width: 100%;
        text-align: center;
    }

    header.active nav {
        display: flex;
   
    }

    nav li {
        margin: 10px 0;
    }
}

/* Estilo para resaltar el enlace activo */
nav a:hover {
    
    width: 200px;
    height: 10%;
    color:#7483FF;
}
.logo {
    display: block;
    width: 70px; /* Ancho de la imagen */
    height: auto; /* Para mantener la proporción de la imagen */
    
}

`