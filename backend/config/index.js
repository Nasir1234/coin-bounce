const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const ACCESS_TOKEN_SECRETKEY = process.env.ACCESS_TOKEN_SECRETKEY;
const REFRESH_TOKEN_SECRETKEY = process.env.REFRESH_TOKEN_SECRETKEY;
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH; 
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;


module.exports = {
    PORT,
    MONGODB_CONNECTION_STRING,
    ACCESS_TOKEN_SECRETKEY,
    REFRESH_TOKEN_SECRETKEY,
    BACKEND_SERVER_PATH,
    CLOUD_NAME,
    API_KEY,
    API_SECRET
}
