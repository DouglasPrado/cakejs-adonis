'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class <%= props.name.plural %>Schema extends Schema {
  up() {
    this.create('<%= props.name.plural %>', table => {
      table.increments();
      table.uuid('uuid');
      table.timestamps();
    });
  }

  down() {
    this.drop('<%= props.name.plural %>');
  }
}

module.exports = <%= props.name.plural %>Schema;
