const router = require("express").Router();
const Users = require("./users-model.js");


router.post("/register", (req, res) => {
    let newUser = req.body;
    // console.log("newUser in router", newUser)

    Users.registerUser(newUser)
        .then(newUser => {
            console.log("body line 11", res)
            console.log("newUser", newUser[0])
            res.status(201)
                .json({
                    message: `created new user ${newUser[0].username}`,
                    // newUser
                })
        })
        .catch((error) => {
            console.log(error)
            res.status(500)
                .json({
                    message: `Username is not available. Please choose another username`,
                    error
                })
        })
})

module.exports = router;