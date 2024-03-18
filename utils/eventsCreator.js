
// crear una funcion que decuelve la creacion de un nuevo evento
// para crear un nuevo evento dos parametros: el nombre y los details que son un objeto
// al despachador tengo que decirle que elemento que dispara el evento

export function dispatchEvent(name, data, element) {
    const event = new CustomEvent(name, {
        detail: data
    });

    element.dispatchEvent(event)
}