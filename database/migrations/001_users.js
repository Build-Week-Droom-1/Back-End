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
      .string('email', 255)
      .notNullable();

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
        .string('contact', 255)

      // jobs
      //   .boolean('applied')
      //   .defaultTo(false)
      //   .notNullable()
      //   .inTable("users")
    }); 
};


exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
