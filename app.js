const express = require('express');
const app = express(); //app va a ser una variable con capacidad de crear endpoints y hacer reqs
const port = 3000;

app.get('/', (req, res) => {
    console.log(req);
    res.status(200).send('Hello World!');
})


app.post('/team/pokemons', () => {

});

app.put('/team', () => {

});

app.delete('/teams/pokemons/:pokeid', () => {
    
});


app.put('/teams', () => {

});


//enciende la API para escuchar conexiones
app.listen(port, () => {
    console.log('Server started at point 3000');
});