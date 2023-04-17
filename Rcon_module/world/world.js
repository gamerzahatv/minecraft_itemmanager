const { host, port, password } = require('../connet/env_con.js');
const { Rcon } = require("rcon-client");

async function kill_entity(){
    const rcon = await Rcon.connect({
        host:host, port:port, password:password
    })
    try {
        console.log("Successfully connected to server!");
        console.log(await rcon.send('/kill @e'));
        rcon.end()
    }
    catch(err) {
        rcon.end()
    }
    
}

module.exports = {
    kill_entity: kill_entity
};