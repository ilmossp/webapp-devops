# DevOps Mock Web Application

This is a web application created for our DevOps workshop. Its primary purpose is to demonstrate server automation.

## How to Run the Application as a Node.js App

1. Clone the repository and navigate to its directory:
   ```bash
   $ git clone https://github.com/ilmossp/webapp-devops
   $ cd webapp-devops
   ```

2. Create a `.env` file:
   ```bash
   $ touch .env
   ```

3. Add the database connection URL to the `.env` file. Depending on your database choice, use one of the following examples:

   - For SQLite:
     ```env
     # SQLite
     DB_CONNECTION_STRING="sqlite:/path/to/file.db"
     ```

   - For PostgreSQL:
     ```env
     # PostgreSQL
     DB_CONNECTION_STRING="postgres://user:pass@example.com:5432/dbname"
     ```

4. Install the required dependencies:
   ```bash
   npm install
   ```

5. Start the application:
   ```bash
   node app.js
   ```

6. The application should now be listening on port 3000.

7. On your first run, make sure to send a request to the API route `/sync` in order to create the necessary database tables.

## How to Run the Application from a Docker Image

Assuming you have cloned the project and are running it from the project directory:

1. Build the Docker image:
   
   ```bash
   docker build -t webapp .
   ```

2. Run the Docker container, mapping port 4000 on your host machine to port 3000 in the container, and provide the `DB_CONNECTION_STRING` as an environment variable (replace `YOURCONNECTIONSTRING` with your actual database connection string):

   ```bash
   docker run -p 4000:3000 -e DB_CONNECTION_STRING=YOURCONNECTIONSTRING webapp
   ```

