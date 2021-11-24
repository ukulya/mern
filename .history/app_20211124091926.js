// console.log('app');
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express(); // будущий сервер

app.use(express.json({extended: true})) // теперб мо
app.use('/api/auth',require('./routes/auth.routes'))

const PORT = config.get('port') || 5000; // если порт не опеределен - то по умолчанию 5000 

async function start(){
    try {
        // это промис - поэтому await
        await mongoose.connect(config.get('mongoUri'),{// сюда передаем url - чтобы подключиться к бд
            // useNewUrlParcer: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        }) 
        app.listen(PORT,() => console.log(`App has started on port ${PORT}`)) 
    } catch(e){
        console.log('Server Error',e.message);
        process.exit(1); // завершаем процесс
    }
}
start();
// app.listen(5000,() => console.log(`App has started`)) // первый параметр - порт
// app.listen(PORT,() => console.log(`App has started on port ${PORT}`)) 