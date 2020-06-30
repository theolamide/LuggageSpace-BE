const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const restricted = require('../middlewares/restricted-middleware.js')
const Users = require("./users-model.js");


router.post("/register", (req, res) => {
    let newUser = req.body;
    const passwordHash = bcrypt.hashSync(newUser.password);
    newUser.password = passwordHash

    Users.registerUser(newUser)
        .then(newUser => {
            console.log("newUser", newUser[0])
            res.status(201)
                .json({
                    message: `created new user ${newUser[0].username}.`,
                    // newUser
                })
        })
        .catch((error) => {
            console.log(error)
            res.status(500)
                .json({
                    message: `Unable to create user`,
                    error
                })
        })
})

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        if (!(username && password)) {
            res.status(406).json({ error: 'Invalid Username or Password' });
        } else {
            Users.findByFilter({ username })
                .first()
                .then(user => {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        const token = signedToken(user)
                        res.status(202).json({
                            message: `Welcome to the house of Dad Jokes ${user.username}!`,
                            id: user.id,
                            username: user.username,
                            token
                        });
                    }
                })
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", (req, res) => {

    Users.findUsers()
        .then(users => {
            res.status(201)
                .json(users)
        })
        .catch((error) => {
            console.log(error)
            res.status(500)
                .json({
                    message: 'Failed to get users'
                });
        })
})

router.put("/update-username/:id", restricted, (req, res) => {
    const userData = req.body
    const { id } = req.params

    if (!userData.username) {
        res.status(400)
            .json({
                message: "Please provide a username"
            })
    } else {
        Users.updateUser(userData, id)
            .then(updatedUsername => {
                res.status(201)
                    .json({
                        message: "Username updated successfully",
                        username: updatedUsername[0].username
                    })
            })
            .catch(err => {
                res.status(400)
                    .json({
                        message: "Unable to update username",
                        error: err
                    })
            })
    }
})

function signedToken(user) {
    const payload = { username: user.username }
    const secret = process.env.JWT_SECRET || "keep it safe";
    const options = { expiresIn: '60m' };

    return jwt.sign(payload, secret, options)
}

module.exports = router;