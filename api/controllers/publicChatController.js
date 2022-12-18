const db =  require('../db');



exports.getMessages = (req, res) => {
    const q = 'SELECT * FROM publicmessages';

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}
exports.getMessagesWithNames = (req, res) => {
    const q = 'SELECT `user_id`,`nickname`,`message`,users.img,publicmessages.img,publicmessages.publication_date FROM publicmessages INNER JOIN users ON users.id = publicmessages.user_id ORDER BY publication_date';

    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}
exports.addMessage = (req, res) => {
    const q = 'INSERT INTO publicmessages(`message`,`img`,`publication_date`,`user_id`) VALUES (?)';

    const values = [
        req.body.message,
        req.body.img,
        req.body.publication_date,
        req.body.user_id
    ]
    if (!req.body.message) {
        return res.status(500).json('Нельзя отправить пустое сообщение!')
    }
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json('Сообщение отправлено');
    })
}