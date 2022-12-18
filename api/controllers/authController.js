const db =  require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = (req, res) => {
    const q = "SELECT * FROM users WHERE `nickname` = ?";

    db.query(q, [req.body.nickname], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length) return res.status(409).json("Пользователь с таким именем существует!");


        //Хешируем пароль
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`nickname`,`password`,`age`) VALUES (?)";

        const values = [
            req.body.nickname,
            hash,
            req.body.age
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json('Пользователь успешно создан!');
        })
    })

}

exports.login = (req, res) => {
    const q = "SELECT * FROM users WHERE `nickname`= ?";

    db.query(q, [req.body.nickname], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json('Пользователя с таким именем не существует!');

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json('Неверное имя пользователя или пароль');

        const token = jwt.sign({ id: data[0].id }, "jwtkey");

        const { password, ...other } = data[0];
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other);
    })

}

exports.logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: "true"
    }).status(200).json("Пользователь завершил сессию!");
}
