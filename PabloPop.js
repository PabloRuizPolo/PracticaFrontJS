import { listAddController } from "./list-add/listAdd-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";

const listAdd = document.querySelector('.listAdd')
const notificationsSection = document.querySelector('.notifications-section')

const {createNotificationDiv} = notificationsController(notificationsSection)

listAdd.addEventListener('error-getting-adds', (event) => {
    createNotificationDiv(event.detail.message, event.detail.type)
    event.stopPropagation()
})

listAddController(listAdd)