const jwt = require('jsonwebtoken');

// Authenticate user using JWT
exports.authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store the decoded token data
        next(); // Continue to the next middleware or route
    } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

// Authorize user based on role
exports.authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Access denied.' });
        }
        next(); // Continue to the next middleware or route
    };
};
