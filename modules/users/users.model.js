
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("users", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mark: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return user;
};
