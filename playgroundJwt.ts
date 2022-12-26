const jwt = require('jsonwebtoken')

// const user = {
//   id: '20',
//   name: 'joao',
//   username: 'joao@gmail.com',
//   password: '1234567'
// }

const secret = 'abcdefghijklmnopqrstuvwxyz'
// const token = jwt.sign({id: user.id, username:user.username}, secret, {expiresIn: 20})

// console.log(token)

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTY3MTkyODM3N30.2IyS8MxSjxV8DZPwdYQB5lpIByxJOyUqXmU8sttuaoo'

const validData = jwt.verify(token, secret)

console.log(validData)