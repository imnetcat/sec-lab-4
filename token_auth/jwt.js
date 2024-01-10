const jwt = require('jsonwebtoken');

const secretKey = 'secret';
const expirationTimeMinutes = 30;

const generateJwt = (sub) => {
  const expirationTime = Math.floor(Date.now() / 1000) + (60 * expirationTimeMinutes);

  const payload = {
    sub: sub,
    exp: expirationTime
  };

  const token = jwt.sign(payload, secretKey);
  return token;
};


module.exports = { generateJwt }