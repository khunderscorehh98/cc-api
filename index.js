const express = require('express');
const cors = require('cors'); // CORS middleware
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes (this is essential if your frontend and backend are on different domains/ports)
app.use(cors());

// Import routes
const postRoutes = require('./routes/postRoutes');
const getRoutes = require('./routes/getRoutes');
const putRoutes = require('./routes/putRoutes');
const deleteRoutes = require('./routes/deleteRoutes');
const patchRoutes = require('./routes/patchRoutes');

const restoreRoutes = require('./routes/restoreRoutes');

// Register route files
app.use('/api', postRoutes);  // Handles POST for all resources
app.use('/api', getRoutes);   // Handles GET for all resources
app.use('/api', putRoutes);   // Handles PUT for all resources
app.use('/api', deleteRoutes); // Handles DELETE for all resources
app.use('/api', patchRoutes);  // Handles PATCH for all resources

// Register restored routes file (optional)
app.use('/api', restoreRoutes); // Handles RESTORE for all resources

// Define a root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Job API!');
});

// Error handling middleware (optional but useful for debugging)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
