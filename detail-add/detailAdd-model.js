
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
        id: data.id,
        userId: data.userId
    }
}

export async function getIdUser(token) {
    const url = 'http://127.0.0.1:8000/auth/me'
    

    try {
        const response = await fetch(url, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        const data = await response.json();

        return parseUser(data)
    } catch (error) {
        throw new Error('getting user data')
    }
}

function parseUser(data) {
    return {
        userId: data.id
    }
}

export async function deleteAdd(token, AddId) {
    const url = `http://127.0.0.1:8000/api/anuncios/${AddId}`;

    try {
        await fetch(url, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${token}`}
        })
    } catch (error) {
        throw new Error('Deletting add')
    }

}