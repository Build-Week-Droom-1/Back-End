# Back-End

## User Endpoints

### POST - Register a User
`https://droom-project-lambda.herokuapp.com/api/auth/register`

Sample schema:
```
       {
          "username": "John_Doe",
          "name": "John Doe",
          "email": "johndoe@yahoo.com",
          "password": "E@kd92",
          "occupation": "Manager",
          "work_experience": "CEO",
          "role": "Job Seeker"
        } 
```

### POST - Login
`https://droom-project-lambda.herokuapp.com/api/auth/login`

Sample schema:
```
        {
          "username": "John_Doe",
          "password": "password
        }
```

### GET - All Users **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/auth/users`

### GET - User by ID **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/auth/user/:id`

(Example: `https://droom-project-lambda.herokuapp.com/api/auth/user/7` will get data for user with the id of '7')

### PUT - Edit User Info **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/auth/user/:id`

### DELETE - Delete User **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/auth/user/:id`


## Jobs Endpoints

### GET - All Jobs Listings
`https://droom-project-lambda.herokuapp.com/api/jobs`

### GET - Jobs Listing By ID
`https://droom-project-lambda.herokuapp.com/api/jobs/:id`

### GET - Jobs Listings By User ID
`https://droom-project-lambda.herokuapp.com/api/jobs/user/:id`

### POST - New Job **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/jobs`

Sample schema: 
```
{
    "jpb_title": "Movie Critic",
    "salary": "$75,000 per year",
    "job_desc": "Enter description here",
    "user_id": 1
}
```
### PUT - Edit a Job Listing **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/jobs/:id`

### DELETE - Delete a Job Listing **requires token in header**
`https://droom-project-lambda.herokuapp.com/api/jobs/:id`


