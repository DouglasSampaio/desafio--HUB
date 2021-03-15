const { Pool } = require('pg')


const pool = new Pool({
    
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'hubDev',
    port: '5432'
    
});

module.exports = pool;


// host: 'ec2-3-91-127-228.compute-1.amazonaws.com',
// user: 'rnbduqirnaxgug',
// password: '5f6b0bb29e940c6b320886308ae6637a70d0899e66ac4a87108aa3886e24eaa4',
// database: 'd49k6u286h7h8d',
// port: '5432'

// host: 'localhost',
//     user: 'postgres',
//     password: 'postgres',
//     database: 'hubDev',
//     port: '5432'


//https://desafio-hub.herokuapp.com/