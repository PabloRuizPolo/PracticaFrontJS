import { loaderRuletController } from "../loader/loaderRulet-controller.js";
import { dispatchEvent } from "../utils/eventsCreator.js";
import { deleteAdd, getAddData, getIdUser } from "./detailAdd-model.js";
import { showAdd } from "./detailAdd-view.js";



export async function detailAddController (element) {
    const loaderRulet = element.querySelector('#loaderRulet')
    const {createLoader, removeLoader} = loaderRuletController(loaderRulet)
    const params = new URLSearchParams(window.location.search);
    const AddId = params.get('AddId');

    if (!AddId) {
        window.location.href = './index.html'
    };

    try {
        const token = localStorage.getItem('token')
        createLoader()
        const addToShow = await getAddData(AddId);
        const userData = await getIdUser(token)
        const removeButton = element.querySelector('#eliminarButton')
        if (addToShow.userId === userData.userId) {
            removeButton.classList.remove('hidden')
        }
        createAddDiv(addToShow, element);

        
        removeButton.addEventListener('click', (event) => {
            event.preventDefault();
            deleteAddConfirm(token, AddId);
            dispatchEvent('addDetail', {
                message: 'Anuncio eliminado',
                type: 'success'
            }, element);
            window.location.href = './index.html'
        })

    } catch (errorMessage) {
        dispatchEvent('addDetail', {
            message: errorMessage,
            type: 'error'
        }, element);
        window.location.href = './index.html'
    } finally {
        removeLoader()
    }
    
    function createAddDiv (addToShow, element) {
        const addDiv = element.querySelector('.add-div');
        addDiv.innerHTML = showAdd(addToShow);

    }

    function deleteAddConfirm(token, AddId) {
        if (window.confirm('¿Estás seguro que quieres eliminar este anuncio?')) {
            try {
                deleteAdd(token, AddId);            
            } catch (error) {
                throw new Error(error.message)
            }
        }
    }
    
}

