"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const app = (0, express_1.default)();
app.use('/user', express_1.default.json(), userRouter);
app.use('/admin', express_1.default.json(), adminRouter);
app.listen(process.env.PORT, () => { console.log('listening on port 3000'); });
