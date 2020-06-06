
exports.up = function (knex) {
    return knex.schema.createTable('traveler_available', (card) => {
        card.increments('id').primary().notNullable()
        card.date('flight_departure_date').notNullable()
        card.time('flight_departure_time').notNullable()
        card.varchar('departure_airport', 3).notNullable()
        card.date('flight_landing_date').notNullable()
        card.time('flight_landing_time').notNullable()
        card.varchar('arrival_airport', 3).notNullable()
        card.integer('available_length').notNullable()
        card.integer('available_breadth').notNullable()
        card.integer('available_height').notNullable()
        card.integer('available_volume').notNullable()
        card.decimal('available_weight').notNullable()
        card.boolean('availability').defaultTo(true).notNullable()
        card.integer('author_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        card.varchar('author', 20).notNullable().references('username').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('traveler_available')
};
