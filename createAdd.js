import { createAddController } from "./create-add/create-add-controller.js"
import { notificationsController } from "./notifications/notifications-controller.js"


document.addEventListener('DOMContentLoaded', () => {
    const createAdd = document.querySelector('#newAdd-form')
    const notificationsSection = document.querySelector('.notifications-section')
    const {createNotificationDiv} = notificationsController(notificationsSection)

    createAdd.addEventListener('createAdd-event', (event) => {
        event.stopPropagation();
        createNotificationDiv(event.detail.message, event.detail.type)
    })

    createAddController(createAdd)
})