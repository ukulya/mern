// console.log('app');
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express(); // будущий сервер

const PORT = config.get('port') || 5000; // если порт не опеределен - то по умолчанию 5000 

async function start(){
    try {
        // это промис - поэтому await
        await mongoose.connect(config.get('mongoUri'),{// сюда передаем url - чтобы подключиться к бд
            useNewUrlParcer: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }) 
    } catch(e){
        console.log('Server Error',e.message);
        process.exit(1); // завершаем процесс
    }
}
start();
// app.listen(5000,() => console.log(`App has started`)) // первый параметр - порт
app.listen(PORT,() => console.log(`App has started on port ${PORT}`)) 