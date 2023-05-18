const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    // if(req.url = '/age'){
    //     console.log(req.url);
    //     const a = url.parse(req.url, true).query;
    //     console.log(a);
    // }else{
    //     console.log('NodeJs');
    // }
    
    const a = url.parse(req.url, true).query;

    let year = a.year;
    let month = a.month;
    let day = a.day;
    let name = a.name;
    let age = new Date().getFullYear() - year;

    if(new Date().getMonth() < month ||(new Date().getMonth()== month && new Date().getDate() < day)){
        age--;
    }
    // return age;

    res.write('Hello'+' '+ name);
    res.write('\n'+'You are currently ' + age + ' years old.');
    res.end();
}).listen(8080); 

/*
function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
/*

/*
    // app.get('/',(req,res) =>{
    //     res.write("<p> Hello John</p>");
    //     res.write("<p> You are currently 22 years old</p>");
    //     res.end()
    // })
*/

/* 
http.get('/age', (req, res) => {
    // console.log(req.query);
    // let query = req.query 
    // res.send(query) 
    res.send({
        year : req.query.year,
        month : req.query.month,
        date : req.query.date,
        name : req.query.name
    });
})
*/