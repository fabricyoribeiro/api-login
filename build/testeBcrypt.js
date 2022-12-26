"use strict";
const bcryptjs = require('bcryptjs');
const password = 'minhasenha';
// const salt = bcryptjs.genSaltSync(14)
// const cryptPassword = bcryptjs.hashSync(password, salt)
// console.log(cryptPassword)
const dbSavedPassword = "$2a$14$r7RqdcLi14X0LBoAlfW9me68WhYPkxN1KuTfCFNaAI6UasGM3oyFi";
console.log(bcryptjs.compareSync(password, dbSavedPassword));
