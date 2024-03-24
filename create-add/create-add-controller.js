import { loaderRuletController } from "../loader/loaderRulet-controller.js";
import { dispatchEvent } from "../utils/eventsCreator.js";
import { newAddSend } from "./create-add-moddel.js"


export function createAddController(element) {
    const loaderRulet = element.querySelector('#loaderRulet')
    const {createLoader, removeLoader} = loaderRuletController(loaderRulet)
    
    if (!isUserLogin()) {
        dispatchEvent('createAdd-event', {
            message: 'Inicia sesión para crear un anuncio',
            type: 'error'
        }, element)
        window.location.href = 'index.html'
    } else {
        element.addEventListener('submit', async (event) => {
            event.preventDefault();
    
            const formData = new FormData(element)
            const addData = {
            nombre: formData.get("name"),
            foto: formData.get("image"),
            descripcion: formData.get("description"),
            precio: formData.get("price"),
            venta: formData.get("accion") === 'vender' ? true : false
        };
    
        try {
            createLoader()
            await newAddSend(addData)
            dispatchEvent('createAdd-event', {
                message: 'Anuncio creado correctamente!',
                type: 'success'
            }, element)
            window.location.href = 'index.html'
    
        } catch (error) {
            dispatchEvent('createAdd-event', {
                message: error.message,
                type: 'error'
            }, element)
        } finally {
            removeLoader()
        }});
    }

    function isUserLogin() {
        return localStorage.getItem('token')
    }

}
