'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class <%= props.name.first %> extends Model {
  static boot() {
    super.boot();
    /**
     * A hook to uuid the user
     * it to the database.
     */
    this.addHook('beforeCreate', 'UuidHook.createUuid');
  }

  static get hidden() {
    return ['id', 'created_at', 'updated_at'];
  }
}

module.exports = <%= props.name.first %>;
