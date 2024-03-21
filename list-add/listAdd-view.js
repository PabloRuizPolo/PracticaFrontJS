

export function showAdds(add) {
    return `
    <a href="detailAdd.html?AddId=${add.id}">
        <p>${add.nombre}</p>
        <p>${add.venta ? 'Se vende' : 'Se compra'}</p>
        <img>${add.foto}</img>
        <p>${add.precio}</p>
        <p>${add.descripcion}</p>
    </a>
    `
};

export function showNoAdds() {
    return `<p>Lo sentimos, en estos momentos no tenemos ningún aunucio</p>`
}