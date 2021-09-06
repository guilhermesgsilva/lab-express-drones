// Iteration #1

const mongoose = require("mongoose");

const droneSchema = mongoose.Schema({
    name: String, //name of the drone model, like General Atomics MQ-9 Reaper
    propellers: Number, //amount of propellers, like 4
    maxSpeed: Number, //meters per second for the drone's maximum speed, like 18
},
{
    timestamps: true,
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;