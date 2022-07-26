module.exports = class AddRoleDto {
  value;
  userId;

  constructor(model) {
    this.value = model.value;
    this.userId = model.userId;
  }
};
