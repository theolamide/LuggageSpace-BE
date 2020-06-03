
exports.up = function (knex) {
    return knex.schema.createTable('traveler_available', (card) => {
        card.increments('id').primary().notNullable()
        card.date('flight date').notNullable()
        card.time('flight time').notNullable()
        card.varchar('departure airport', 3).notNullable()
        card.date('flight landing date').notNullable()
        card.time('flight landing time').notNullable()
        card.varchar('arrival airport', 3).notNullable()
        card.decimal('available weight').notNullable()
        card.boolean('availability').defaultTo(true).notNullable()
        card.integer('author_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        card.varchar('author', 20).notNullable().references('username').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('traveler_available')
};
