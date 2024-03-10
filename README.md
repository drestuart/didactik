# Didactik

## Setup

### Prerequisites

This web app requires git and [docker](https://docs.docker.com/engine/install/).

### Starting

Run `docker compose up -d` to build and start the docker containers. The first time this is run it may take a while. The initial startup also populates the database, so there will be some data to start out. Any changes to the data will persist across restarts.

Once everything has started up open http://localhost:3000/ to see the UI.

### Stopping

Run `docker compose down` to stop the containers.

Run `docker compose down --volumes` to clear out the database. It will reinitialize on the next startup.

## Additional features

### Individual Mentor View, Update, and Delete
In addition to the full list of mentors there is a single mentor view. Click the mentor's username to see their individual page.

The single mentor page also has an Edit button, which goes to a form where the individual fields can be edited and saved, or the mentor can be deleted.

### Mentor categories

Each mentor has one or more categories representing the areas of their expertise. These can be added and edited, and users can search for an available mentor with one or more specified categories. Try opening http://localhost:3000/search and searching for "Python".

Note that all category inputs expect categories to be comma-separated.

### Database

The app includes a basic Postgres database, which is initialized with a table and some initial data at startup. Changes to data persist across container restarts unless the container volume is deleted.

The app also includes an Adminer container, providing a database UI. When the app is running, open http://localhost:8080/ and log in with:

- System: `PostgreSQL`
- Server: `db`
- Username: `postgres`
- Password: `example`
- Database: `postgres`

The app uses the `didactik` schema, which has the `mentors` table.

### Docker

All components run in individual Docker containers, orchestrated with docker-compose, making the app simple to run on any system with Docker installed.
