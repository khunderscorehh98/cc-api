// helpers.js
const db = require('./config');

// Helper function for executing SELECT queries (GET requests)
const executeQuery = async (query, params = []) => {
    try {
        const [rows] = await db.promise().query(query, params);
        return rows;
    } catch (error) {
        throw new Error('Database query error: ' + error.message);
    }
};

// Helper function for executing INSERT queries (POST requests)
const insertData = async (query, params) => {
    try {
        const [result] = await db.promise().query(query, params);
        return result;
    } catch (error) {
        throw new Error('Database query error: ' + error.message);
    }
};

// Helper function for executing DELETE queries
const deleteData = async (query, params) => {
    try {
        const [result] = await db.promise().query(query, params);
        return result;
    } catch (error) {
        throw new Error('Database query error: ' + error.message);
    }
};

// Helper function for executing UPDATE queries (PUT/PATCH requests)
const updateData = async (query, params) => {
    try {
        const [result] = await db.promise().query(query, params);
        return result;
    } catch (error) {
        throw new Error('Database query error: ' + error.message);
    }
};

module.exports = {
    executeQuery,  // For GET requests (SELECT queries)
    insertData,    // For POST requests (INSERT queries)
    deleteData,    // For DELETE requests
    updateData     // For PUT and PATCH requests (UPDATE queries)
};
