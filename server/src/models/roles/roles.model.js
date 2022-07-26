const { Schema, default: mongoose, model } = require("mongoose");
const UserDto = require("../../dtos/user/user-dto");

const RolesSchema = new Schema({
  value: { type: String, unique: true },
  description: { type: String },
  users: {
    type: [{ ...UserDto }],
  },
});

module.exports = model("Roles", RolesSchema);
