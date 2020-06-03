exports.up = function (knex) {
    return knex.schema.createTable('parcel_to_traveler_match', (match) => {
        match.increments('id').primary().notNullable()
        match.integer('traveler_card_id').notNullable().references('id').inTable('traveler_available').onUpdate('CASCADE').onDelete('CASCADE')
        match.integer('parcel_owner_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        match.varchar('parcel_owner_username').notNullable().references('username').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        match.varchar('parcel_origin').notNullable().references('departure airport').inTable('traveler_available').onUpdate('CASCADE').onDelete('CASCADE')
        match.varchar('parcel_destination').notNullable().references('arrival airport').inTable('traveler_available').onUpdate('CASCADE').onDelete('CASCADE')
        match.integer('parcel_length').notNullable()
        match.integer('parcel_breadth').notNullable()
        match.integer('parcel_height').notNullable()
        match.integer('parcel_volume').notNullable()
        match.decimal('parcel_weight').notNullable()
        match.integer('messenger_id').notNullable().references('id').inTable('traveler_available').onUpdate('CASCADE').onDelete('CASCADE')
        match.varchar('messenger_username', 20).notNullable().references('author').inTable('traveler_available').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('parcel_to_traveler_match')
};