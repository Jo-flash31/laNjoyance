const jwt = require('jsonwebtoken');
const ENV = require('../config/env');
const createError = require('../middlewares/error');

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) return next(createError(401, 'Acces Denied!'));
    jwt.verify(token, ENV.TOKEN, (error, user) => {
        if(error) 
            return next(createError(403, 'Token non valide !'));
        req.user = user;
        next()        
        ;
    });

}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.role === 'admin'){
            next();
        }else{
            return next(createError(403, 'Vous n\'avez pas accès à cette ressource !'));
        }
    });
};

module.exports = { verifyToken, verifyAdmin
};