"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidate = exports.registerValidate = void 0;
const Joi = require('@hapi/joi');
const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(100),
    });
    return schema.validate(data);
};
exports.registerValidate = registerValidate;
const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(100),
    });
    return schema.validate(data);
};
exports.loginValidate = loginValidate;
