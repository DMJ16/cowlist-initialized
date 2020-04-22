const app = require("./app.js");
const db = require("./db");

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
