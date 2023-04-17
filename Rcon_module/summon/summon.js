const { host, port, password } = require('../connet/env_con.js');
const { Rcon } = require("rcon-client");

async function getcow(){
    const rcon = await Rcon.connect({
        host:host, port:port, password:password
    })
    try {
        await console.log("Successfully connected to server!");
        await console.log(await rcon.send('/summon cow ~ ~1 ~'));
        await rcon.end()
    }
    catch(err) {
        rcon.end()
    }
    
}

module.exports = {
    getcow: getcow
};