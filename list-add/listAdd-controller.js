import { getAdds } from "./listAdd-model.js";
import { showAdds } from "./listAdd-view.js";


export async function listAddController(listAdd) {
    try {
        const adds = await getAdds();
        renderAdds(adds, listAdd)
    } catch (error) {
        alert(error)
    }
}

function renderAdds(adds, listAdd) {
    adds.forEach(add => {
        const addDiv = document.createElement('div');
        addDiv.innerHTML = showAdds(add);
        listAdd.appendChild(addDiv)

    });
}
// ok crear un div para cada add
// OK Pasarle cada anuncio a showadds
