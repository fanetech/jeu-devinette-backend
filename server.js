import express from "express";
import db from './db/db'
const app = express();
const PORT = 3000
db.sync()
  .then(console.log('contected to db'))
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`run port ${PORT}`));