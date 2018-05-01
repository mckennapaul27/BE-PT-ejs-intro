const express = require('express');
const pets = require('./data/pets');
const PORT = 3000;
const chunk = require('lodash.chunk');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index.ejs', {
        head: {
            title: 'Home'
        },
        header: {
            title: 'Home'
        },
        name: 'paul',
        pets
    });
});

app.get('/gallery', (req, res) => {
    res.render('pages/gallery.ejs', {
        head: {
            title: 'Gallery'
        },
        header: {
            title: 'Gallery'
        },
        name: 'paul',
        pets: chunk(pets, 3)
    });  
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
})