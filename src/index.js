const express = require('express');
const { getRestaurants, getRestaurant, addRestaurant, updateRestaurant } = require('./functions');
 
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Hello there')
})

app.get('/restaurants', (req, res) => {
    getRestaurants()
    .then (restaurants => res.send(restaurants))
});

app.get('/restaurants/:restId', (req, res) => {
    getRestaurant(req.params.restId)
    .then(restaurant => res.send(restaurant))
});

app.post('/restaurants', (req, res) => {
    addRestaurant(req.body)
    .then(() => res.send("Restaurant Added").status(201))
});

app.patch('/restaurants/:restId', (req, res) => {
    updateRestaurant(req.params.restId, req.body)
    .then(() => res.send("Successfully updated restaurant!").status(200))
})