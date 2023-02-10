
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
      unique: true,
    },
    mark: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  });
  return user;
};
