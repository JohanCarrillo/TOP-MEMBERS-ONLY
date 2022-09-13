## About the Project

This is a small messaging app where the users must sign up and log in to
post new messages. It also has a role system where only verified members can
see who posted the messages but only admins can delete the messages.

The project uses the mongoose ORM to connect to a MongoDB database in Atlas, to
create the sessions I used express-session and passportjs to create a
log in system. I didn't implement JWT, to manage the sessions I only used a local
strategy and the security of the system is really weak, but as a learning exercise
the project was really fruitfull.

This project was created with the aim of flexing my new skills in the use of
databases management (mongoDB), the creation of a log in system alongside user sessions,
server side rendering with ejs and form validation.

Since this is a learning exercise I greatly encourage the user to **never sing up
or login using his personal information**.

## Getting Started

### Installation

1. To install the libraries that the project requires, run the command

```sh
npm install
```

2. Before running the program you need to create a .env file containing the
   next variables:

   - DB_CONNECTION: used to connect to the mongoDB database
   - SECRET: secret keyword used to create the sessions and encrypt passwords
   - MEMBER_KEY: keyword used to promote a user to **member** status
   - ADMIN_KEY: keyword used to promote a user to **admin** status

3. To run the program use

```sh
npm run start
```

or in development mode,

```sh
npm run start:dev
```

this starts the project in watch mode, if you want to start the debugger use

```sh
npm run start:debug
```

### Usage

You can see a live preview [here](https://members-only-k5bj.onrender.com/).
Using the app is very simple, just sign up or log in to post messages,
if you want to see who posted the messages and when, you have to become a
member using a secret keyword, that is the same defined inside the .env file,
the same aplies to becoming an admin, the difference is that admins can delete
messages.
