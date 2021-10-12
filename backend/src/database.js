/*Encargado de tener solo el codigo de la base de datos*/
const mongoose = require("mongoose");

//console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

/*para que no haya errores en la conexión */
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
