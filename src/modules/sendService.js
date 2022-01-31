export function sendService (url, method, data) {
    console.log('asd');
    return fetch (url, {
        method: method,
        body: JSON.stringify(data),//передаем user 
        headers: {
            "Content-Type": "application/json"
        } 
    }).then(res => res.json())
}

