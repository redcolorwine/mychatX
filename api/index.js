

const { createServer } = require("http");
const { Server } = require("socket.io");
const express = require('express');
const publicChatRouter = require('./routes/publicChat');
const usersRouter = require('./routes/users');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const MySQLEvents = require('@rodrigogs/mysql-events');
const db = require('./db');
dotenv.config();


const app = express();


app.use(express.json());
//Опции для работы CORS и работы с куки 
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    ///..other options
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/public', publicChatRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
    }
});


db.connect(function (error) {

})

io.on('connection', async (socket) => {

    console.log("user connected", socket.id);
    //сервер должен прослушивать каждого клиента с этим сокетом
    socket.on('new_message', function (data) {
        console.log('client says', data);
        io.emit('new_message', data);
        const q = 'INSERT INTO publicmessages(`message`,`img`,`publication_date`,`user_id`) VALUES (?)';
        const values = [
            data.message,
            data.img,
            data.publication_date,
            data.user_id
        ]
        db.query(q, [values], (err, data) => {
            if (err) console.log(err);
            console.log('Сообщение отправлено');
        })
    });
    //сервер будет отправлять сообщение всем подключенным клиентам

})
httpServer.listen(process.env.PORT, () => {
    console.log('chat is working');
})