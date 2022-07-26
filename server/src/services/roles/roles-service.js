const rolesModel = require("../../models/roles/roles.model");
const ApiError = require("../../exceptions/api-error");

class RoleService {
  async create(value, description) {
    const existedRole = await rolesModel.findOne({ value });
    if (existedRole) {
      throw ApiError.BadRequest(`Такая роль уже есть!`);
    }
    const newRole = await rolesModel.create({ value, description });
    return newRole;
  }

  async getRoleByValue(value) {
    const existedRole = await rolesModel.findOne({ value });
    if (!existedRole) {
      throw ApiError.BadRequest(`Роль не найдена!`);
    }
    return existedRole;
  }
}

module.exports = new RoleService();
