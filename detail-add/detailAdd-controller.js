import { getAddData } from "./detailAdd-model.js";
import { showAdd } from "./detailAdd-view.js";

export async function detailAddController (element) {
    try {
        const params = new URLSearchParams(window.location.search);
        const AddId = params.get('AddId')

        if (!AddId) {
            window.location.href = './index.html'
        }

        const addToShow = await getAddData(AddId);
        createAddDiv(addToShow, element)

    } catch (error) {
        alert(error)
    }
    
    function createAddDiv (addToShow, element) {
        const addDiv = element.querySelector('.add-div');
        addDiv.innerHTML = showAdd(addToShow);
    }
}

