const express = require("express");
const appointmentRouter = express.Router();
const appointmentModel = require("../Model/appointmentModel"); 

appointmentRouter.post("/", async (req, res) => {
    try {
        const newAppointment = new appointmentModel(req.body);
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = appointmentRouter;
