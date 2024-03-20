import { loaderRuletController } from "../loader/loaderRulet-controller.js";
import { dispatchEvent } from "../utils/eventsCreator.js";
import { getAddData } from "./detailAdd-model.js";
import { showAdd } from "./detailAdd-view.js";

const loaderRulet = document.querySelector('#loaderRulet')
const {createLoader, removeLoader} = loaderRuletController(loaderRulet)

export async function detailAddController (element) {
    try {
        createLoader()
        const params = new URLSearchParams(window.location.search);
        const AddId = params.get('AddId')

        if (!AddId) {
            window.location.href = './index.html'
        }

        const addToShow = await getAddData(AddId);
        createAddDiv(addToShow, element)

    } catch (errorMessage) {
        dispatchEvent('error-getting-addDetail', {
            message: errorMessage,
            type: 'error'
        }, element)
    } finally {
        removeLoader()
    }
    
    function createAddDiv (addToShow, element) {
        const addDiv = element.querySelector('.add-div');
        addDiv.innerHTML = showAdd(addToShow);
    }
}

