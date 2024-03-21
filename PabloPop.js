import { listAddController } from "./list-add/listAdd-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";

const listAdd = document.querySelector('.listAdd')
const notificationsSection = document.querySelector('.notifications-section')
const session = document.querySelector('#session-controller')

const {createNotificationDiv} = notificationsController(notificationsSection)

session.addEventListener('close-session', (event) => {
    event.stopPropagation();
    createNotificationDiv(event.detail.message, event.detail.type)
})

sessionController(session)


listAdd.addEventListener('error-getting-adds', (event) => {
    event.stopPropagation()
    createNotificationDiv(event.detail.message, event.detail.type)
})

listAddController(listAdd)
