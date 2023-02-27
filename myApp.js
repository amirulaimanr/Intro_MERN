
let myJsonSample = {
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "123 Main St.",
        "city": "New York",
        "state": "NY",
        "zip": "10001"
        },
    "phone": {
            "home": "212-555-1212",
            "mobile": "212-555-1212",
            "work": "212-555-1212"
            
            },
    "email": "joe@example.com",
}

function firstLog(){
    console.log(myJsonSample.address.street);
}

function secondLog(){
    const http = require('http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
}

firstLog();
secondLog();