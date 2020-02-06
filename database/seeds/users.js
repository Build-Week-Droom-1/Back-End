exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("users")
      .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("users").insert([
          { "username": "pmiddleton", "password": "password1", "name": "Preston Middleton", "email": "pres.10.nap@gmail.com", "occupation": null, "work_experience": null, "role": "Job Seeker" },
          { "username": "tdepew", "password": "password1", "name": "Tristan Depew", "email": "tdepew@gmail.com", "occupation": null, "work_experience": null, "role": "Job Seeker" },
          { "username": "jdesir", "password": "password1", "name": "Jeffery Desir", "email": "jdesir@gmail.com", "occupation": null, "work_experience": null, "role": "Job Seeker" }
        ]);
      });
  };