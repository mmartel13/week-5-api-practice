const { connectDb } = require("./connect-db");

const restRef = connectDb().collection("restaurants");

function getRestaurants() {
    return restRef
    .get()
    .then((snapshot) => {
        const restaurants = [];
        snapshot.forEach((doc) => {
            restaurants.push({ id: doc.id, ...doc.data() });
        });
        return restaurants
    })
    .catch(console.error)
};

function getRestaurant(restId) {
    return restRef.doc(restId).get()
    .then((doc) => {
        return doc.data()
    })
    .catch(console.error)
}

function addRestaurant(restaurant) {
    return restRef
    .add(restaurant)
    .catch(console.error)
};

function updateRestaurant(restId, dataUpdate) {
    return restRef
    .doc(restId)
    .update(dataUpdate)
};


module.exports = { getRestaurants, getRestaurant,addRestaurant, updateRestaurant };