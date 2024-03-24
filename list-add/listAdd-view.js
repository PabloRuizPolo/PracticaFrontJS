

export function showAdds(add) {
    return `
    <a href="detailAdd.html?AddId=${add.id}">
        <p  class="look" >${add.nombre}</p>
        <p>${add.venta ? 'Se vende' : 'Se compra'}</p>
        <img class="image" src="${add.foto}" />
        <p  class="look">${add.precio} euros</p>
        <p><em>${add.descripcion}</em></p>
    </a>
    `
};

export function showNoAdds() {
    return `<p>Lo sentimos, en estos momentos no tenemos ningún aunucio</p>`
}