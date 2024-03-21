import { listAddController } from "./list-add/listAdd-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";

const listAdd = document.querySelector('.listAdd')
const notificationsSection = document.querySelector('.notifications-section')
const session = document.querySelector('#session-controller')

sessionController(session)

const {createNotificationDiv} = notificationsController(notificationsSection)

listAdd.addEventListener('error-getting-adds', (event) => {
    createNotificationDiv(event.detail.message, event.detail.type)
    event.stopPropagation()
})

listAddController(listAdd)
