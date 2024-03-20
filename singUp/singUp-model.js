
export async function newUser(mail, password) {
    const response = await fetch('http://127.0.0.1:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify({username: mail, password: password}),
        headers: {'Content-type': "application/json"}
    });

    if (!response.ok) {
        throw new Error('Creando User')
    }

}