const jwt = require('jsonwebtoken');
require('dotenv').config();

const authCheck = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) return res.status(401).json({
    error: 'Access Denied'
  });

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.allParams().user = verified;
    return next();
  } catch (err) {
    return res.status(401).json({
      error: 'Token Not Valid'
    });
  }
}

module.exports = authCheck;
