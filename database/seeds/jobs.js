exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("jobs")
      .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("jobs").insert([
          { job_title: "Lambda TL", job_desc: "Help people learn to code!", contact: "learntocode@lambda.com" },
          { job_title: "Professional Sneezer", job_desc: "Totally not trying to spread Corona.", contact: "totallylegit@gmail.com" },
          { job_title: "Alien Tech Support", job_desc: "Only apply if you understand martian", contact: "mars2020@yahoo.com" }
        ]);
      });
  };