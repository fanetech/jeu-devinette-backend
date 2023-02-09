const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const usersRoute = require("./modules/users/users.router");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders:
      "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
  })
);
app.use(`/api/v1/users`, usersRoute);
(async () => {
  await db.sequelize.sync();
})();
app.listen(PORT, () => console.log(`run port ${PORT}`));
