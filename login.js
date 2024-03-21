import { loginController } from "./login/login-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const notificationsSection = document.querySelector('.notifications-section')
    const {createNotificationDiv} = notificationsController(notificationsSection)

    loginForm.addEventListener('login-notification', (event) => {
        event.stopPropagation();
        createNotificationDiv(event.detail.message, event.detail.type)
    })

    loginController(loginForm);

})
