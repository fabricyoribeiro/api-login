"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const token = req.header('authorization-token');
    if (!token)
        return res.status(401).send('Access denied');
    try {
        const userVerified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();
    }
    catch (error) {
        res.status(401).send('Acess denied');
    }
}
exports.auth = auth;
