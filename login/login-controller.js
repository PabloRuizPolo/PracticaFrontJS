import { loaderRuletController } from "../loader/loaderRulet-controller.js";
import { dispatchEvent } from "../utils/eventsCreator.js";
import { loginUser } from "./login-model.js";


export function loginController(element) {
    const loaderRulet = element.querySelector('#loaderRulet')
    const {createLoader, removeLoader} = loaderRuletController(loaderRulet)

    element.addEventListener('submit', (event) => {
        event.preventDefault();

        loginSubmit(element)
    })

    async function loginSubmit(element) {
        const {mail, password} = getUserData(element);
    
        try {
            createLoader()
            const jwt = await loginUser(mail, password)
            dispatchEvent('login-notification', {
                message: 'Sesión iniciada',
                type: 'success'
            }, element)
            localStorage.setItem('token', jwt)
            window.location.href = "index.html"
        } catch (error) {
            dispatchEvent('login-notification', {
                message: error.message,
                type: 'error'
            }, element)
        } finally {
            removeLoader()
        }
    
    }
    
    function getUserData(element) {
        const mail = element.querySelector('#mail')
        const password = element.querySelector('#password')
    
        return {
            mail: mail.value,
            password: password.value
        }
    }
}


/*
1- Leer lo datos del user pasarselos al modelo y enviar para ver la respuesta
2- Recibir el ok! de la response
3- Guaradar el ok! en jwt y alamacenarlo en local.storage.setItem()
4- Notficacion de todo okey y enviarlo de vuelta
*/