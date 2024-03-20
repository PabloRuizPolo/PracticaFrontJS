import { showLoaderRulet } from "./loaderRulet-view.js";

export function loaderRuletController(loader) {

    function createLoader() {
        loader.classList.add('active');
        loader.innerHTML = showLoaderRulet()
    };

    function removeLoader() {
        loader.classList.remove('active');
        loader.innerHTML = ''
    }

    return {createLoader, removeLoader}
}

