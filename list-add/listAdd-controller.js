import { dispatchEvent } from "../utils/eventsCreator.js";
import { getAdds } from "./listAdd-model.js";
import { showAdds, showNoAdds } from "./listAdd-view.js";


export async function listAddController(listAdd) {
    const loaderRullet = document.querySelector('.lds-spinner')
    try {
        loaderRullet.classList.toggle('hidden')
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
        loaderRullet.classList.toggle('hidden')
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