// Iteration #1

require("../db");
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

// Drone.insertMany(drones).then(() => {
//     console.log(`drones created - ${drones.length}`)
// });

async function startDatabase() {
    try {
        await Drone.deleteMany();
        await Drone.insertMany(drones)
        console.log(`drones created - ${drones.length}`)
    } catch (e) {
        console.log("error occurred", e);
    } finally {
        mongoose.connection.close();
    }
};

startDatabase();