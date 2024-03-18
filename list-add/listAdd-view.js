

export function showAdds(add) {
    return `
    <p>${add.nombre}</p>
    <p>${add.venta}</p>
    <img>${add.foto}</img>
    <p>${add.foto ? 'Se vende' : 'Se compra'}</p>
    <p>${add.descripcion}</p>
    `
}