exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("jobs")
      .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("jobs").insert([
          { "job_title": "Lambda TL", "job_desc": "Help people learn to code!", "salary": "$50,000", "user_id": 1 },
          { "job_title": "Professional Sneezer", "job_desc": "Totally not trying to spread Corona.", "salary": "$50,000", "user_id": 1 },
          { "job_title": "Alien Tech Support", "job_desc": "Only apply if you understand martian", "salary": "$50,000", "user_id": 1 }
        ]);
      });
  };