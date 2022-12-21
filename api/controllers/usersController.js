const db = require('../db');



exports.getUserByNickname = (req, res) => {
    const q = 'SELECT `id`,`nickname`,`age`,`img` FROM users WHERE nickname=?';

    db.query(q, req.body.nickname, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}
exports.getUsers = (req, res) => {
    const q = 'SELECT `id`,`nickname`,`age`,`img` FROM users';

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}
exports.getFriends = (req, res) => {
    const q = 'SELECT * FROM friends WHERE user_id=?';

    db.query(q, [req.body.user_id], (err, data) => {
        if (err) return res.status(409).json(err);

        return res.status(200).json(data);
    })
}
exports.addFriend = (req, res) => {
    const q = 'INSERT INTO redchatdb.friends SET friend_id=?, user_id=?';
    db.query(q, [req.body.friend_id, req.body.user_id], (err, data) => {
        if (err) return res.status(409).json(err);

        return res.status(200).json('Пользователь успешно добавлен в друзья!');
    })
}