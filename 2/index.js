const http = require('http');
const fs = require('fs');

http.createServer((req, res) => 
{
    switch(req.url){
    case "/vegetables" : 
        fs.readFile('./vegetables.json', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type':'text/vegetables'});
            res.end(data);
        })
        break;
    }
}).listen(8081);