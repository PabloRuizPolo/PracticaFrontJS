

export async function getAdds() {
    let adds = []
    const url = 'http://127.0.0.1:8000/api/anuncios'

    try {
        const response = await fetch(url);
        const data = await response.json();
        adds = parseData(data);
    } catch (error) {
        throw new Error('getting the adds list');
    }

    return adds
}

function parseData(data) {
    return data.map(data => ({
        nombre: data.nombre,
        foto: data.foto,
        descripcion: data.descripcion,
        precio: data.precio,
        venta: data.venta,
        id: data.id
    }))
}