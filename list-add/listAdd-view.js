

export function showAdds(add) {
    return `
    <p>${add.nombre}</p>
    <p>${add.foto ? 'Se vende' : 'Se compra'}</p>
    <img>${add.foto}</img>
    <p>${add.precio}</p>
    <p>${add.descripcion}</p>
    `
}