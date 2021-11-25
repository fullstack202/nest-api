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
  return db.createTable('tbl_facilities', {
    pid: { type: 'int', primaryKey: true, autoIncrement: true },
    id: { type: 'string', notNull: false },
    facility_type: { type: 'string', notNull: false },
    venue_id: { type: 'string', notNull: false },
    capacity: { type: 'string', notNull: false },
    created_at: { type: 'string', notNull: false },
    updated_at: { type: 'string', notNull: false },
    company_id: { type: 'string', notNull: false },
    source: { type: 'JSONB', notNull: false },
    deleted_at: { type: 'string', notNull: false },
    data: { type: 'JSONB', notNull: false },
    sales_group_id: { type: 'string', notNull: false },
  });
};

exports.down = function (db) {
  return db.dropTable('tbl_facilities');
};

exports._meta = {
  "version": 1
};
