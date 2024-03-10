# CSV to JSON converter API

## Setup instructions for running : -
1. Type "npm i" in terminal to install all required dependencies.

2. Create a ".env" file with the following fields:
   - CSV_FILE_PATH = { path to csv file }
   - PORT = { port number for running application }
  
3. Type "npm run start" in terminal to start the server

## API endpoints : -
1. Parse CSV to JSON and upload data to DB
   - Route -->  /users/upload
   - Access --> public
   - Method --> POST
  
2. Age distribution of users
   - Route --> /users/distribution/age
   - Access --> public
   - Method --> GET
