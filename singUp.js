import { notificationsController } from "./notifications/notifications-controller.js";
import { singUpController } from "./singUp/singUp-controller.js";
import { loaderRuletController } from "../loader/loaderRulet-controller.js";

document.addEventListener('DOMContentLoaded', () => {
    const singUpForm = document.querySelector('#singup-form');
    const notificationsSection = document.querySelector('.notifications-section')
    const {createNotificationDiv} = notificationsController(notificationsSection)

    singUpForm.addEventListener('NotificationSingUp', (event) => {
        event.stopPropagation()
        createNotificationDiv(event.detail.message, event.detail.type)
    })
    singUpController(singUpForm)

})
