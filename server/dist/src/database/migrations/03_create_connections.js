"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('connections');
}
exports.down = down;
