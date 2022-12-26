"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.get('/', authController_1.auth, (req, res) => {
    if (req.user.admin) {
        res.send('esse dado é de admin');
    }
    else {
        res.status(401).send('Not admin: Acess denied');
    }
});
router.get('/free', authController_1.auth, (req, res) => {
    res.send('Esse dado so pode ser visto por quem esta logado');
});
module.exports = router;
