const Promise = require("bluebird");

// configure table in db
// input is db, output is table(s)
const configTables = (db) => {
  // account for if db is not promisified
  if (!db.queryAsync) {
    // promisify db
    // promisifyAll returns new obj with all props promisified
    db = Promise.promisifyAll(db);
  }

  // create cows table
  // return the promise object
  return db.queryAsync(`
      CREATE TABLE IF NOT EXISTS cows (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (20),
        description VARCHAR (500)
      );`);
};

module.exports = configTables;
