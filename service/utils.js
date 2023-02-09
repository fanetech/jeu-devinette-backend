module.exports.userCreateError = (err) => {
  let errors = { pseudo: "" };

  if (err.original.sqlMessage.includes("pseudo"))
    errors.pseudo = "Numero incorrect ou déjà pris";
  return errors;
};
