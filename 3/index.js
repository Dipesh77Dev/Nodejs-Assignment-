const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const z = url.parse(req.url, true).query;
    const PI = 3.141592653589793;

    var output = -1;
    var object = z.object;
    var metric = z.metric;
    var radius = z.radius;

    if(object == "sphere" && metric == "volume")
    {
        output = (4/3) * PI * radius * radius * radius;
    }
    else if(object == "sphere" && metric == "surfaceArea")
    {
        output = 4 * PI * radius * radius;
    }
    else if(object == "circle" && metric == "area")
    {
        output= PI * radius * radius;
    }

    if(output!=-1)
        res.write(metric + " of " + object + " is " + output);
    res.end();
}).listen(8082);