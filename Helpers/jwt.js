const expressJwt = require('express-jwt')
require('dotenv').config()
api = process.env.API_URL

const isRevoked = async(req, payload, done) => {
    if(!payload.isAdmin) done(null, true)
    done()
}

const authJwt = () => {
    return expressJwt({
        secret:process.env.JWT_AUTH_SECRETKEY, 
        algorithms:['HS256'],
        isRevoked:isRevoked
    })
    .unless({ path: [
        `${api}/user/login`,
        {url:`${api}/user`, methods:['GET']},
        {url:/\/api\/v1\/products(.*)/, methods:['GET','OPTIONS']},
        {url:/\/api\/v1\/category(.*)/, methods:['GET','OPTIONS']}
    ]})
}

module.exports = authJwt