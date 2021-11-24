// console.log('app');
const express = require('express')

const app = express(); // будущий сервер

app.listen(5000,() => console.log(`App has started`)) // первый параметр - порт