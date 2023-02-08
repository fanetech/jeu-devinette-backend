const userService = require("./user.service");


module.exports.getUser = async (req, res) => {
    const users = await userService.getAll()
    res.status(200).json({ msg: "success", users });
};

module.exports.create = async (req, res) => {
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ msg: "error", err: "No data" });

    const { pseudo } = req.body;
    if (!pseudo) {
      return res.status(400).json({ msg: "error", err: "data no complete" });
    }
    const user = await userService.create(req.body)
    res.status(200).json({ msg: "success", user });
};

module.exports.update = async (req, res) => {
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ msg: "error", err: "No data" });
    const user = await userService.update(req.params.id, req.body)
    res.status(200).json({ msg: "success", user });
};

module.exports.findOne = async (req, res) => {
    const user = await userService.findOne(req.params.id)
    res.status(200).json({ msg: "success", user });
};

module.exports.delete = async (req, res) => {
    const user = await userService.delete(req.params.id)
    res.status(200).json({ msg: "success", user });
};
