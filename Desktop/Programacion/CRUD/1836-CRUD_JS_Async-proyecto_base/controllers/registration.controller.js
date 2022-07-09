import { clientServices  } from "../services/client-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event)  => {
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.createClients(nombre, email).then(response => {
        window.location.href = '/screens/registro_completado.html';   
    }).catch(err => console.log(err));
})