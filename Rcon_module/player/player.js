const { host, port, password } = require('../connet/env_con.js');
const { Rcon } = require("rcon-client");

async function kill_player(){
    const rcon = await Rcon.connect({
        host:host, port:port, password:password
    })
    try {
        console.log("Successfully connected to server!");
        console.log(await rcon.send('/kill meownani'));
        rcon.end()
    }
    catch(err) {
        rcon.end()
    }
    
}

module.exports = {
    kill_player: kill_player
};