// const express = require('express')
const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'soleXchange',
    password: 'admin',
    port: 5432, // Default PostgreSQL port
});

// pool.connect()

// const signup = (res, req) => {
//     console.log(res.body, 'new data')

//     pool.query('SELECT NOW()', (err, res) => {
//         if (err) {
//             console.error('Error executing query', err);
//         } else {
//             console.log('Result:', res.rows);
//         }

//         // Release the client back to the pool
//         pool.end();
//     });
// }


module.exports = pool