const express = require('express');
const { addMessage, getMessages, getMessagesWithNames } = require('../controllers/publicChatController');

const publicChatRouter = express.Router();

publicChatRouter.get('/messages', getMessagesWithNames);
publicChatRouter.post('/messages', addMessage);

module.exports = publicChatRouter;