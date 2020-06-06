
exports.up = function (knex) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id').primary()
        user.varchar('username', 20)
            .unique()
            .notNullable()
        user.varchar('password')
            .notNullable()
        user.string('first_name', 20)
            .notNullable()
        user.string('middle_name', 20)
        user.string('last_name', 20)
            .notNullable()
        user.varchar('email', 50)
            .unique()
            .notNullable()
        user.varchar('street_address', 200)
            .unique()
            .notNullable()
        user.varchar('apartment_number', 10)
        user.integer('zip_code', 6)
        user.varchar('state', 2)
            .notNullable()
        user.varchar('country', 20)
        user.varchar('identification')
            .unique()
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
