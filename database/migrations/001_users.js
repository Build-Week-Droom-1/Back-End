exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();

    users
      .string('password', 255)
      .notNullable();

    users
      .string('name')
      .notNullable();

    users
      .string('email', 255)
      .notNullable()
      .unique();

    users
      .string('occupation', 255);

    users
      .string('work_experience', 255);

    users
      .string('role', 255)
      .notNullable();
  })
    .createTable('jobs', jobs => {
      jobs.increments();

      jobs
        .string('job_title', 255)
        .notNullable()

      jobs
        .string('job_desc', 255)

      jobs
        .string('salary')
        .notNullable();

      jobs
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        .notNullable();
    });


};


exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('jobs');
};

// name, location, occupation, highest education, work experience, skills, interests