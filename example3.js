function netServer(){
    const http = require('http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
        if (req.url === '/data/pop') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(os.cpus()));
        } else {
            res.statusCode = 404;
            res.end();
        }
});

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
}

netServer();