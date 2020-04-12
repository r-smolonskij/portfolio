const jwt = require("express-jwt");
const jwksRsa = require('jwks-rsa');

const nameSpace= 'http://localhost:3000/';
//MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true, // Default Value
    rateLimit:true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-fktb6lvl.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: "G6eu2rnmgOVDT2TgqPMneuOH6eyCkBAo",
  issuer: "https://dev-fktb6lvl.eu.auth0.com/",
  algorithms: ['RS256']
});


exports.checkRole = (role)=>{
    return (req,res,next) => {
        const user = req.user;
        if(user && (user[`${nameSpace}roles`]  === role)){
            next();
            
        }else{
            return res.status(401).send({title:'Not Authorized', description:'You are not authorized to access this data'});
        }
    }
}