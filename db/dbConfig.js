module.exports.dbCredential = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "jeu-devinette-db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};