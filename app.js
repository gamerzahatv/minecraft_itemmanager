
const express = require('express');
const summon = require('./Rcon_module/summon/summon.js');
const player = require('./Rcon_module/player/player.js');
const give = require('./Rcon_module/give/give.js');
const world = require('./Rcon_module/world/world.js');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/give_bread', (req, res) => {
    give.give_bread();
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});


app.get('/getcow', (req, res) => {
    summon.getcow();
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

app.get('/world_kill_entity', (req, res) => {
    world.kill_entity();
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});