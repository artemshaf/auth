const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token-service");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(ApiError.UnAuthError());
    }
    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnAuthError());
    }
    const userData = tokenService.validateAccessToken(accessToken);
		console.log(userData);
    if (!userData) {
      return next(ApiError.UnAuthError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnAuthError());
  }
};
