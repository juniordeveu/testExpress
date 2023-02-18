


const http = require( 'http' )
const os = require('os')
const express = require( 'express' );


const app = express();

app.get( '/test', ( req, res ) => {
    const dirName = (__dirname)
    const testIP = req.ip
    const testIPs = req.ips

    const cpuInfo = JSON.stringify( os.cpus() )

    res.writeHead(200, {'Content-Type':'text/plain', "Content-Type":"application/json"})
    
    res.write( cpuInfo + " \n\n\nAdres IP \n "
                        + testIP    
                        + " \n\n\nDir name "  
                        + dirName 
                        + " \n\n\n IPS \n " 
                        + testIPs 
                        );
    
    res.end()
} )



app.listen(4000)
