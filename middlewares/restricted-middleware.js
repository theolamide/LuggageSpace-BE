const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET || "keep it safe", (err, decodedToken) => {
            if (err) {
                res.status(401)
                    .json({
                        message: 'User not verified. Please sign in again to generate new token.'
                    })
            } else {
                req.decodedToken = decodedToken
                next();
            }
        })
    } else {
        res.status(400)
            .json({
                message: 'No token provided. Please register of login to get a token.'
            })
    }
}