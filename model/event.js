const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please add the user organizing the event']
    },
    name: {
        type: String,
        required: [true, 'Please add the name for the event.']
    },
    description: {
        type: String,
        required: [true, 'Please add the description for the event.']
    },
    date: {
        type: Date,
        required: [true, 'Please add the date for the event.']
    },
    starttime:{
        type: String,
        required: [true, 'Please add the start time for the event.']
    },
    endtime:{
        type: String,
        required: [true, 'Please add the end time for the event.']
    },
    eventType: {
        type: String,
        enum: ['Meeting', 'Birthday', 'Appointment'],
    },
    reminder: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', eventSchema);