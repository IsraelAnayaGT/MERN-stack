require("dotenv").config();

const app = require("./app");
require("./database");

async function mainStaringProgram() {
  await app.listen(app.get("port"));
  console.log("Server on port ", app.get("port"));
}

mainStaringProgram();
