# Mongo DB Connector Template
This repository is a simple boilerplate starter for connecting to a MongoDB instance and running scripts against it. Personally, I use this repository as an entrypoint into a MongoDB database to allow me to run arbitatry database administration scripts (e.g. bulk data updates, and other maintenace) outside the context of an application.

### Getting Setup
- Clone repo, and run `npm install` at the root.
- Create an `.env` file at the root containing, at a minimum a variable declaration with a valid MongoDB URI. For example, if your db is running on localhost, your URI might look something like this (making sure to swap in values for `dbusername`, `password` and `databasename`):
    ```
    MONGO_URL_DEV=mongodb://dbusername:password@localhost:27017/databasename
    ```
- Open `sample_cxn.js` and replace values for `dbName` and `collectionName` to match an existing database and collection name for the db you're connecting to.
- To test the connection, run the script from the repository root using the following command to pull 20.

```
node sample_cxn.js
```