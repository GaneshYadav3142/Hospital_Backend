const mongoose=require("mongoose")
const appointmentSchema=new mongoose.Schema({
//     - Name
// - Image URL
// - Specialization (Select tag with **Cardiologist, Dermatologist, Pediatrician, Psychiatrist** as options)
// - Experience
// - Location
// - Date (Appointment creation date, populate from backend)
// - Slots (Number of slots available for the day)
// - Fee
name: String,
image: String,
specialization: {
    type: String,
    enum: ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Psychiatrist']
},
experience: Number,
date: {
    type: Date,
    default: Date.now 
},
location: String,
slots: Number,
fee: Number


})

const appointmentModel=mongoose.model("Appointment",appointmentSchema)

module.exports=appointmentModel