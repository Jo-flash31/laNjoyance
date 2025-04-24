const dotenv = require('dotenv');
const { Db } = require('mongodb');

dotenv.config();

const ENV = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    DB_NAME : process.env.DB_NAME,
    TOKEN: process.env.TOKEN
}
module.exports = ENV;