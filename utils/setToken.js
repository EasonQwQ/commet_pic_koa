const jwt = require('jsonwebtoken');
const secret = require('./../config/secret.json');

const setToken = (uid) => jwt.sign({ uid }, secret.sign, { expiresIn: '24h' });
module.exports = { setToken };
