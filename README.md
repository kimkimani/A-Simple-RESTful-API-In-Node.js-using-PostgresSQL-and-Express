run `npm install` to install the project dependencies

#### Setting up the PostgreSQL database
Install the following PostgreSQL environments.

- [PostgreSQL](https://www.postgresql.org/download/)an opensource relational databse management system.
- [pgAdmin](https://www.pgadmin.org/download/), standalone destop application for managing PostgreSQL databases.

Once installed and well configured, create a database and a table to work with.

- Create a database, `my_todos_db`.

```SQL
CREATE DATABASE test
```

- Create a table, `todos`.

```SQL
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  checked  Boolean NOT NULL)
```

### Running the application

- Start the development server by Running:

```bash
npm run dev
```

- In a browser, visit `http://localhost/4000`;

- Interact with the application.