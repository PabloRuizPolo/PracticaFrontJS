import { showNotification } from "./notifications-view.js";


export function notificationsController(element) {
    function createNotificationDiv(message, type = 'success') {
        const notificationDiv = document.createElement('div');
        notificationDiv.classList.add('notifications', type);
        notificationDiv.innerHTML = showNotification(message);
        element.appendChild(notificationDiv)

        setTimeout(()=>{
            notificationDiv.remove()
        }, 2000)
    }

    return {createNotificationDiv}
}
