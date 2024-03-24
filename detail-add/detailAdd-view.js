

export function showAdd(add) {
    return `
    <p  class="look" >${add.nombre}</p>
        <p>${add.venta ? 'Se vende' : 'Se compra'}</p>
        <img class="image" src="${add.foto}" />
        <p  class="look">${add.precio} euros</p>
        <p><em>${add.descripcion}</em></p>
    `
}