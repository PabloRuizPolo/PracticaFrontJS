
export async function loginUser(mail, password) {
    let response
    try {
        response = await fetch('http://127.0.0.1:8000/auth/login', {
            method: 'POST',
            body: JSON.stringify({username: mail, password: password}),
            headers: {'Content-type': "application/json"}
        });
        
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message)
        } else {
            return data.accessToken
        }

    } catch (error) {
        if (error.message) {
            throw error.message
        } else {
            throw error;
        }
       
    }
}