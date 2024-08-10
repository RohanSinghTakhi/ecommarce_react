const express = require('express');
const { body, validationResult } = require('express-validator');
const Router = express.Router();
const User = require('../modals/Users.cjs'); // Ensure path is correct

Router.post(
    "/createuser", [
        body('email').isEmail(),
        body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, password } = req.body;

            const newUser = await User.create({
                name,
                email,
                password,
            });
            res.status(201).json({
                message: 'User created successfully',
                user: newUser
            });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({
                message: 'Error creating user',
                error: error.message
            });
        }
    }
);

module.exports = Router;
