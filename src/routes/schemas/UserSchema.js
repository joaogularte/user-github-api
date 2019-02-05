const Joi = require('joi');
const Schema = require('./Schema');

class UserSchema extends Schema {
  static list(data) {
    const schema = {
      query: Joi.object({
        since: Joi.number().integer().min(0).default(0),
      }),
    };
    return this.validate(data, schema);
  }

  static get(data) {
    const schema = {
      params: Joi.object({
        username: Joi.string().trim().required(),
      }),
    };
    return this.validate(data, schema);
  }
}

module.exports = UserSchema;
