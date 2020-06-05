const database = require('../database/dbConfig.js');

module.exports = {
    findUsers,
    findById,
    addUser,
    findByFilter,
    updateUser,
    deleteUser
}

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
const addUser = (user) => {
    const [id] = database("users").insert(user, "id");
    return findById(id)
}

const updateUser = (changes, id) => {
    return database("users")
        .update("username", changes.username)
        .where("id", id)
        .then(([id]) => {
            return findById(id)
        })
}