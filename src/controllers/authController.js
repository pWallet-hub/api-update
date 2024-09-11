const { AuthUser } = require('../models/authAccessModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Ensure all fields are provided
        if (!username || !password || !role) {
            return res.status(400).json({ error: 'Please provide all required fields.' });
        }

        // Check if user already exists
        const existingUser = await AuthUser.findOne({ where: { username } });
        if (existingUser) {
            return res.status(409).json({ error: 'Username already taken.' });
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await AuthUser.create({ username, password: hashedPassword, role });
        
        // Omit password from the response
        res.status(201).json({ id: user.id, username: user.username, role: user.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Ensure username and password are provided
        if (!username || !password) {
            return res.status(400).json({ error: 'Please provide both username and password.' });
        }

        // Find user and check password
        const user = await AuthUser.findOne({ where: { username } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Respond with token
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
