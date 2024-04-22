const db = require('./connect.js')

db.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error executing query', err);
    } else {
        console.log('Result:', res.rows);
    }

    // Release the client back to the pool
    db.end();
});