module.exports = class RolesDto {
  value;
  description;

  constructor(model) {
    this.value = model.value;
    this.description = model.description;
  }
};
