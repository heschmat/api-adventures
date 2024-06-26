const fs = require('fs');
require('dotenv').config();

const config = {
    dev: {
        driver: "pg",
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: "localhost",
        database: process.env.PG_DB,
        port: 5432
    }
};

fs.writeFileSync('database.json', JSON.stringify(config, null, 2));
