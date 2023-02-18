


const http = require( 'http' )
const os = require('os')
const express = require( 'express' );
const { cp } = require('fs');

const app = express();

app.get( '/test', ( req, res ) => {
 
    const testIP = req.ip
    const cpuInfo = JSON.stringify( os.cpus() )

    res.writeHead(200, {'Content-Type':'text/plain', "Content-Type":"application/json"})
    
    res.write( cpuInfo + "\n\n\nAdres IP \n"+ testIP)

    res.end()
} )



app.listen(4000)
