const Pool = require("pg").Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'name_of_your_database',
    password:'your_password',
    port:'5432'
});

module.exports = pool;