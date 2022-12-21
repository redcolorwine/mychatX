const express = require('express');
const { getUserByNickname, getUsers, getFriends, addFriend } = require('../controllers/usersController');
// const { addMessage, getMessages, getMessagesWithNames } = require('../controllers/publicChatController');

const usersRouter = express.Router();

// usersRouter.get('/users', getUsers);
usersRouter.post('/getuser', getUserByNickname);
usersRouter.get('/getusers', getUsers);
usersRouter.post('/getfriends',getFriends);
usersRouter.post('/addfriend',addFriend);
module.exports = usersRouter;