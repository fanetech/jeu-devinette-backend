const {
  models: { user },
} = require("../../db/db");

module.exports.getAll = async () => {
  return user.findAll();
};

module.exports.create = async (payload) => {
  return await user.create(payload);
};

module.exports.update = async (userId, payload) => {
  const data = await user.update(payload, {
    where: {
      userId,
    },
  });
  return this.findOne(data[0]);
};

module.exports.findOne = async (userId) => {
  return await user.findOne({ where: { userId } });
};

module.exports.delete = async (userId) => {
  return await user.destroy({
    where: {
      userId,
    },
  });
};
