const Sequelize = require("sequelize");

// name the database
const database = "cowsDB";

// initialize connection to database
const sequelize = new Sequelize({
  database: database,
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
});

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Successful Sequelize connection has been established.");
  })
  .catch((err) => {
    console.error("Unable to connect to MySQL:", err);
  });

// construct model/table
// Q: how to make sure error handling is working
const Cow = sequelize.define("cowTest", {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
  },
});

// Sync all models that aren't already in the database
// Q: brute force? when and why?
// Q: If you want Sequelize to automatically create the table (or modify it as needed)
// according to your model definition, you can use the sync method, as follows:
// Note: using `force: true` will drop the table if it already exists
// sequelize.sync({ force: true });

sequelize.sync();

// Q: when and why?
// Drop all tables
// sequelize.drop();

module.exports = Cow;
