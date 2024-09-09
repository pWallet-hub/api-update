require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./models/user');
const { AuthUser } = require('./models/authAccessModel'); 
const { swaggerUi, specs } = require('./swagger');
const { authenticate, authorize } = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected and server running on port ' + PORT);
        await sequelize.sync(); 
    } catch (err) {
        console.error('Unable to connect to the database:', err.stack);
    }
});