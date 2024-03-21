

export async function newAddSend(addData) {
    const token = localStorage.getItem('token');
    let response;

    try {
        response = await fetch('http://127.0.0.1:8000/api/anuncios', {
        method: 'POST',
        body: JSON.stringify(addData),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }});

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message)

    }
    } catch (error) {
        if (error.message) {
            throw error.message
        } else {
            throw error;
        } 
    }
}