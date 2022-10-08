const express = require('express');
const app = express(); //app va a ser una variable con capacidad de crear endpoints y hacer reqs
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})


app.post('/team/pokemons', () => {
    res.status(200).send('Hello World!');

});

app.put('/team', () => {
    res.status(200).send('Hello World!');

});

app.delete('/teams/pokemons/:pokeid', () => {
    res.status(200).send('Hello World!');
    
});


app.put('/teams', () => {
    res.status(200).send('Hello World!');

});


//enciende la API para escuchar conexiones
app.listen(port, () => {
    console.log('Server started at point 3000');
});