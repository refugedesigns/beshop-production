const { Schema, model, Types } = require("mongoose");

const tokenSchema = new Schema({
  refreshToken: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  userAgent: {
    type: String,
    required: true,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Token = model("Token", tokenSchema);

module.exports = Token;
