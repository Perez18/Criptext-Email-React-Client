const { db, createTables, Table } = require('./models.js');

const getEmailsByThreadId = function(threadId) {
  return db
    .select('*')
    .from(Table.EMAIL)
    .where({
      threadId
    });
};

const getThreads = function(timestamp, limit, offset) {
  return db
    .select('*')
    .from(Table.EMAIL)
    .limit(limit || 20)
    .offset(offset || 0)
    .orderBy('date', 'DESC')
    .where('date', '<', timestamp || 'now');
};

const addEmail = function(params) {
  return db.table(Table.EMAIL).insert(params);
};

const markThreadAsRead = function(threadId) {
  return db
    .table(Table.EMAIL)
    .where({
      threadId
    })
    .update({
      unread: false
    });
};

const deleteEmail = function(emailKey) {
  return db
    .table(Table.EMAIL)
    .where({
      key: emailKey
    })
    .del();
};

const closeDB = function() {
  db.close();
  db.disconnect();
};

module.exports = {
  createTables,
  getEmailsByThreadId,
  addEmail,
  markThreadAsRead,
  deleteEmail,
  closeDB,
  getThreads
};
