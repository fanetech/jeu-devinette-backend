const express = require("express");
const  db  = require("./db/db");
const usersRoute = require("./modules/users/users.router");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(`/api/v1/users`, usersRoute);
(async () => {
  await db.sequelize.sync();
})()
app.listen(PORT, () => console.log(`run port ${PORT}`));
