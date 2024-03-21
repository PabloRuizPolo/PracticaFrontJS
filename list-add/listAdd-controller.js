import { loaderRuletController } from "../loader/loaderRulet-controller.js";
import { dispatchEvent } from "../utils/eventsCreator.js";
import { getAdds } from "./listAdd-model.js";
import { showAdds, showNoAdds } from "./listAdd-view.js";


export async function listAddController(listAdd) {
    const loaderRulet = document.querySelector('#loaderRulet')
    const {createLoader, removeLoader} = loaderRuletController(loaderRulet)
    try {
        createLoader()
        const adds = await getAdds();
        if (adds.length > 0) {
            renderAdds(adds, listAdd)
        } else {
            renderShowNoAdds(listAdd)
        }
        
    } catch (errorMessage) {
        dispatchEvent('error-getting-adds', {
            message: errorMessage,
            type: 'error'
        }, listAdd)
    } finally {
        removeLoader()
    }
}

function renderAdds(adds, listAdd) {
    adds.forEach(add => {
        const addDiv = document.createElement('div');
        addDiv.innerHTML = showAdds(add);
        listAdd.appendChild(addDiv)

    });
}

function renderShowNoAdds(listAdd) {
    const noAddsDiv = document.createElement('div');
    noAddsDiv.innerHTML = showNoAdds()
    listAdd.appendChild(noAddsDiv)
}