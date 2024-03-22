import { detailAddController } from "./detail-add/detailAdd-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";


document.addEventListener('DOMContentLoaded', () => {
    const detailAdd = document.querySelector('.detailAdd');
    const notificationsSection = document.querySelector('.notifications-section')


    const {createNotificationDiv} = notificationsController(notificationsSection) 

    detailAdd.addEventListener('error-getting-addDetail', (event) => {
        createNotificationDiv(event.detail.message, event.detail.type)
        event.stopPropagation()
    })

    detailAddController(detailAdd)
})