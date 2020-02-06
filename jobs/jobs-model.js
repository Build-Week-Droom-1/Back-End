const db = require('../database/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getJobsByUser
};

function get() {
  return db('jobs');
}

function getById(id) {
  return db('jobs')
    .where({ id })
    .first();
}

function getJobsByUser(id) {
    return db('jobs as j')
        .where('j.user_id', id) // fix this
}

function insert(job) {
  return db('jobs')
    .insert(job, 'id')
    .then(id => {
      return getJobsByUser(id[0]);
    });
}

function update(id, changes) {
  return db('jobs')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('jobs')
    .where('id', id)
    .del();
}