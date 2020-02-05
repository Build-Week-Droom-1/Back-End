exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("users")
      .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          { username: "pmiddleton", password: "password1", email: "pres.10.nap@gmail.com", role: "Employer" },
          { username: "tdepew", password: "password1", email: "tdepew@gmail.com", role: "Job Seeker" },
          { username: "jdesir", password: "password1", email: "jdesir@gmail.com", role: "Job Seeker" }
        ]);
      });
  };