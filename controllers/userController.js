const mongoose = require('mongoose');
const User = require('../model/user');

const registerUser = async(req, res) => {
    const {name, email, password, createdAt} = req.body;

    if(!name|| !email || !password)
    {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

    const userExists = await User.findOne({email});

    if(userExists)
    {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

    const user = await User.create({
        name,
        email,
        password,
        createdAt
    });

    if(user)
    {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
        });
    }
    else
    {
        res.status(400).json({
            success: false,
            error: error.message
        })
        
    }
};

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password)))
    {
        user.lastlogin = Date.now();
        await user.save();
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
        });
    }
    else
    {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
};

module.exports = {
    registerUser,
    loginUser
}