const mongoose = require('mongoose');
const User = require('../model/user');
const Event = require('../model/event');

const createEvent = async(req, res) => {
    try{
        const userExists = await User.findById(req.body.user);
        if(!userExists)
        {
            return res.status(404).json({message: 'User not found.'});
        }

        const event = await Event.create(req.body);
        res.status(200).json({
            success: true,
            data: event
        })
    }catch(error)
    {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

const getEventSortedByDate = async(req, res) => {
    try{
        const userExists = await User.findById(req.body.user);
        if(!userExists)
        {
            return res.status(404).json({message: 'User not found.'});
        }
        else
        {
            const event = await Event.find({user: req.user.id}).sort({date: 1});
            res.status(200).json({
                success: true,
                data: event
            });
        }
    }catch(error){
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    createEvent,
    getEventSortedByDate,
}