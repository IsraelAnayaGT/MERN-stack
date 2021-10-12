/* solo contendra la información del framwork */
const express = require("express");
const cors = require("cors");
const app = express();

/*settings confuguraciones del servidor Inicio*/
app.set("port", process.env.PORT || 4000);
/*settings confuguraciones del servidor Final*/

/*middlewares funciones que se ejecutan antes de llegar ala ruta Inicio*/
app.use(cors());
app.use(express.json());
/*middlewares funciones que se ejecutan antes de llegar ala ruta Final*/

/*routes Inicio*/
app.use("/api/user", require("./routes/user"));
app.use("/api/notes", require("./routes/notes"));
/*routes Final*/

module.exports = app;
