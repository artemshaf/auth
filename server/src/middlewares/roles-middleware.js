const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token/token-service");

module.exports = (reqRoles) => {
  return function (req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(" ")[1];
      if (!authHeader || !accessToken) {
        return next(ApiError.UnAuthError());
      }
      const userData = tokenService.validateAccessToken(accessToken);
      let correctRole = false;
      if (userData.roles.some((role) => reqRoles.includes(role))) {
        correctRole = true;
      }
      if (!correctRole) {
        return next(ApiError.BadRequest("Такой роли у пользователя - нет!"));
      }
      return next();
    } catch (e) {
      return next(ApiError.UnAuthError());
    }
  };
};
