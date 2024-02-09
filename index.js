import http from 'http'
const port = +process.env.PORT || 4000
// Create web server
http.createServer((req, res)=>{
    res.writeHead( 200, {
        'Content-type': 'application/json'
    })
    switch(req.url) {
        case '/':
            res.end(JSON.stringify("You're home"))
        break 
        case '/about':
            res.end(JSON.stringify("About page"))
        break 
        default: 
            res.end(JSON.stringify("404 page"))
    }
}).listen(port, ()=>{
    console.log(`server is running on : http://localhost:${port}`);
})