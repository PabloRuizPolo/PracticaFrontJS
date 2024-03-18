

export function showAdds(add) {
    return `
    <p>${add.nombre}</p>
    <p>${add.foto ? 'Se vende' : 'Se compra'}</p>
    <img>${add.foto}</img>
    <p>${add.precio}</p>
    <p>${add.descripcion}</p>
    `
};

export function showNoAdds() {
    return `<p>Lo sentimos, en estos momentos no tenemos ningún aunucio</p>`
}