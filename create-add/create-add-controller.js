import { dispatchEvent } from "../utils/eventsCreator.js";
import { newAddSend } from "./create-add-moddel.js"


export function createAddController(element) {
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
        await newAddSend(addData)
        setTimeout((window.location.href = 'index.html'), 2000)
    } catch (error) {
        dispatchEvent('createAdd-event', {
            message: error.message,
            type: 'error'
        }, element)
    }});

}
