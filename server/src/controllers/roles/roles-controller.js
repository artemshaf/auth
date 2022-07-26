const rolesService = require("../../services/roles/roles-service");

class RolesContoller {
  async create(req, res, next) {
    try {
      const { value, description } = req.body;
      const roleData = await rolesService.create(value, description);
      return res.json(roleData);
    } catch (e) {
      next(e);
    }
  }

  async getRoleByValue(req, res, next) {
    try {
      const value = req.params.value;
      const roleData = await rolesService.getRoleByValue(value);
      return res.json(roleData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RolesContoller();
