
export async function getAddData(AddId) {
    const url = `http://127.0.0.1:8000/api/anuncios/${AddId}`;

    try {
        const response = await fetch(url);
        const data = await response.json()
        const add = parseAdd(data);
        
        if (!response.ok) {
            throw new Error
        }

        return add
        
    } catch (error) {
        throw new Error('Getting add details')     
    }
}

function parseAdd(data) {
    return {
        nombre: data.nombre,
        foto: data.foto,
        descripcion: data.descripcion,
        precio: data.precio,
        venta: data.venta,
        id: data.id
    }
}

