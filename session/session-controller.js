import { dispatchEvent } from "../utils/eventsCreator.js";
import { createIndexPage, createUserPage } from "./session-view.js"


export function sessionController(nav) {
    
    if (isUserLogin()) {
        nav.innerHTML = createUserPage();
        const logOutButton = nav.querySelector('#logOut');
        logOutButton.addEventListener('click', (event) => {
            event.preventDefault()
            localStorage.removeItem('token')
            dispatchEvent('close-session', {
                message: 'Sesión cerrada',
                type: 'success'
            }, )
            sessionController(nav)
        })
        
    } else {
        nav.innerHTML = createIndexPage()
    }

    function isUserLogin() {
        return localStorage.getItem('token')
    }
}