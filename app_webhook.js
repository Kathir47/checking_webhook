const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello from inside Docker!</h1><p>Port mapping is working!</p>');
});

server.listen(3333, () => {
    console.log('Server running on port 3333asd3c');
});
