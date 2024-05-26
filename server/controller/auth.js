import { database } from "../config/database.js";

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";

    database.query(q, [req.body.username], (err, result) => {
        if (err) {
            return res.json(err);
        }
        if (result.length === 0) {
            return res.status(400).json("Sai tài khoản hoặc mật khẩu");
        }

        const isPasswordMatch = req.body.password === result[0].password;
        if (!isPasswordMatch) {
            return res.status(400).json("Sai tài khoản hoặc mật khẩu");
        }
    })
}

export const logout = (req, res) => {

}