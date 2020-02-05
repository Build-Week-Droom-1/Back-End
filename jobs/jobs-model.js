const db = require('../database/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('jobs');
}

function getById(id) {
  return db('jobs')
    .where({ id })
    .first();
}

function insert(job) {
  return db('jobs')
    .insert(job)
    .then(ids => {
      return getById(ids[0]);
    });
}

async function update(id, changes) {
  await db('jobs')
    .where({ id })
    .update(changes);

  return getById(id);
}

function remove(id) {
  return db('jobs')
    .where('id', id)
    .del();
}