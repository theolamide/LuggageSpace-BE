
exports.up = function (knex) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id').primary().notNullable()
        user.varchar('username', 20)
            .unique()
            .notNullable()
        user.string('first name', 20)
            .notNullable()
        user.string('middle name', 20)
        user.string('last name', 20)
            .notNullable()
        user.varchar('email', 50)
            .unique()
            .notNullable()
        user.varchar('street address', 200)
            .unique()
            .notNullable()
        user.varchar('apartment number', 10)
        user.integer('zip code', 6)
        user.varchar('state', 2)
            .notNullable()
        user.varchar('country', 20)
        user.varchar('identification', 100)
            .unique()
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
