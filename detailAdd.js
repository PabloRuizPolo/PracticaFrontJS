import { detailAddController } from "./detail-add/detailAdd-controller.js";


document.addEventListener('DOMContentLoaded', () => {
    const detailAdd = document.querySelector('.detailAdd');
    detailAddController(detailAdd)
})