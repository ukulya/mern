// console.log('app');
const express = require('express')
const config = require('config')

const app = express(); // будущий сервер

const PORT = config.get('port');

app.listen(5000,() => console.log(`App has started`)) // первый параметр - порт