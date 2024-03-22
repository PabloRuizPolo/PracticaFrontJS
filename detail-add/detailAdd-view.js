

export function showAdd(add) {
    return `
    <p>${add.nombre}</p>
    <p>${add.venta ? 'Se vende' : 'Se compra'}</p>
    <img>${add.foto}</img>
    <p>${add.precio}</p>
    <p>${add.descripcion}</p>
    `
}