import { loaderRuletController } from "../loader/loaderRulet-controller.js";
import { dispatchEvent } from "../utils/eventsCreator.js";
import { newUser } from "./singUp-model.js";



export function singUpController(element) {
    const loaderRulet = element.querySelector('#loaderRulet')
    const {createLoader, removeLoader} = loaderRuletController(loaderRulet)

    element.addEventListener('submit', (event) => {
        event.preventDefault();

        singUpSubmit(element)
    })
    
    function singUpSubmit(element) {
        
        let errors = [];

        if (!isMailValid(element)) {
            errors.push('Error al escribir el email. Escríbalo de nuevo')
        };

        if (!arePasswordSame(element)) {
            errors.push('Las contraseñas no coinciden')
        }
        
        if (errors.length === 0) {
            singUpUser(element)
        } else {
            showErrors(errors)
        }
    }
    
    function isMailValid(element) {
        const mail = element.querySelector('#mail');
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(\”.+\”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(mail.value)
    }
    function arePasswordSame(element) {
        const password = element.querySelector('#password')
        const confirmPassword = element.querySelector('#confirmpassword')
        return password.value === confirmPassword.value
    }
    async function singUpUser(element) {
        const mail = element.querySelector('#mail');
        const password = element.querySelector('#password')

        try {
            createLoader()
            await newUser(mail.value, password.value);
            dispatchEvent('NotificationSingUp', {
                message: 'Registrado correctamente',
                type: 'success'
            }, element)

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000)
        } catch (error) {
            dispatchEvent('NotificationSingUp', {
                message: error,
                type: 'error'
            }, element)
        } finally {
            removeLoader()
        }
    }
    function showErrors(errors) {
        for (const error of errors) {
            dispatchEvent('NotificationSingUp', {
                message: error,
                type: 'error'
            }, element)
        }
    }

}

// FUNCION DE SINGUP
/*
1- OK!  Crear formulario para rellenar campos y obtener data del user
2- OK! Recoger esa data
3- OK! Conectarnos con la base de datos y enviarle la data
4- Crear usuario y avisar al user
5- Enviarlo de vuelta a la pagina de inicio
*/