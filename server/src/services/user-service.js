const UserModel = require("../models/user.model");
const MailService = require("./mail-service");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registation(email, password) {
    const existedUser = await UserModel.findOne({ email });
    if (existedUser) {
      throw ApiError.BadRequest(`Пользователь с такой почтой - ${email} уже зарегестрирован!`);
    }
    const hashPass = await bcrypt.hash(password, 4);
    const activationLink = v4();
    const newUser = await UserModel.create({ email, password: hashPass, activationLink });
    await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink) {
    const existedUser = await UserModel.findOne({ activationLink });
    if (!existedUser) {
      throw ApiError.BadRequest("Неверная ссылка активации");
    }
    existedUser.isActivated = true;
    await existedUser.save();
  }

  async login(email, password) {
    const existedUser = await UserModel.findOne({ email });
    if (!existedUser) {
      throw ApiError.BadRequest("Неверный логин или пароль!");
    }
    const isPassEquals = await bcrypt.compare(password, existedUser.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный логин или пароль!");
    }
    const userDto = new UserDto(existedUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refreshToken(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnAuthError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await tokenService.findRefreshToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw ApiError.UnAuthError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async getUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
