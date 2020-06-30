const database = require('../database/dbConfig');

// Get all users
const findUsers = () => {
    return database("users")
}

// Find user by id
const findById = (id) => {
    return database("users")
        .where("id", id)
}

// Find user by filter
const findByFilter = (filter) => {
    return database("users")
        .where(filter);
}

// Add user
const registerUser = (newUser) => {
    // console.log("newUser in model", newUser)
    return database("users")
        .returning("id")
        .insert(newUser)
        .then(([id]) => {
            return findById(id)
        })
}

// Update username
const updateUser = (changes, id) => {
    console.log("here")
    return database("users")
        .update(changes)
        .where("id", id)
        .returning("id")
        .then(([id]) => {
            return findById(id)
        })
}

module.exports = {
    findUsers,
    findById,
    registerUser,
    findByFilter,
    updateUser
}