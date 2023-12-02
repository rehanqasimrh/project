const mysql = require('mysql');
const _env = require('dotenv')
_env.config()
const ENV = process.env


// const dbConfig = {
//     host: ENV.HOST,
//     user: ENV.USER_NAME,
//     password: ENV.DB_PASSWORD,
//     database: ENV.DATABASE,
// };

// const connection = mysql.createConnection(dbConfig)

// const users = [
//     { id: 1, username: 'john_doe', email: 'john@example.com', password: 'password123' },
//     { id: 2, username: 'jane_smith', email: 'jane@example.com', password: 'pass456' },
//     { id: 3, username: 'alice_wonder', email: 'alice@example.com', password: 'alicepass789' },
//     { id: 4, username: 'bob_marley', email: 'bob@example.com', password: 'bobpass' },
//     { id: 5, username: 'emma_jones', email: 'emma@example.com', password: 'emmapassword' }
// ];

// Connect to the database
// connection.promise()
//     .then(() => {
//         console.log('Connected to the database');

//         // Insert user data into the users table
//         const sql = 'INSERT INTO users (id, username, email, password) VALUES ?';
//         const values = users.map(user => [user.id, user.username, user.email, user.password]);

//         return connection.query(sql, [values]);
//     })
//     .then(results => {
//         console.log(`${results[0].affectedRows} records inserted`);

//         // Close the connection
//         connection.end();
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         connection.end();
//     });

// const mysql = require('mysql');

// MySQL database configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rehanqasim',
    password: 'rehanqasim',
    database: 'ecomstore'
});

// Sample user data
const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com', password: 'password123' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com', password: 'pass456' },
    { id: 3, username: 'alice_wonder', email: 'alice@example.com', password: 'alicepass789' },
    { id: 4, username: 'bob_marley', email: 'bob@example.com', password: 'bobpass' },
    { id: 5, username: 'emma_jones', email: 'emma@example.com', password: 'emmapassword' }
];

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Insert user data into the users table
    const sql = 'INSERT INTO users (id, username, email, password) VALUES ?';
    const values = users.map(user => [user.id, user.username, user.email, user.password]);

    connection.query(sql, [values], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log(`${results.affectedRows} records inserted`);
        }

        // Close the connection
        connection.end();
    });
});
