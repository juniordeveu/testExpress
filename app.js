


const http = require( 'http' )
const os = require('os')
const express = require( 'express' )

const app = express();
const server = http.createServer(( req, res ) =>{

    if(req.url === '/'){
        const cpu = JSON.stringify(os.cpus())

        res.writeHead( 200, {"Content-Type": "text/plain",
                             "application": "json"})
        
        res.write(cpu)
        res.end();


        return
    }


} );
app.get( '/test', ( req, res ) => {
    const testIP = req.ip
    res.writeHead(200, {'Content-Type':'text/plain'})
    
    res.write(testIP)
    res.end()
} )


server.listen(3000)
app.listen(4000)
