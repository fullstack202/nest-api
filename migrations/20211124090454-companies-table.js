'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('tbl_companies', {
    pid: { type: 'int', primaryKey: true, autoIncrement: true },
    id: { type: 'string', notNull: false },
    manager_id: { type: 'string', notNull: false },
    name: { type: 'string', notNull: false },
    friendly_name: { type: 'string', notNull: false },
    type: { type: 'string', notNull: false },
    deleted_at: { type: 'string', notNull: false },
  });
};

exports.down = function (db) {
  return db.dropTable('tbl_companies');
};

exports._meta = {
  "version": 1
};
