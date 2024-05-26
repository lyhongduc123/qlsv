import { database } from "../config/database.js";
import jwt from "jsonwebtoken";

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
        
        const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        const {password, ...other} = result[0];
        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite: true,
        }).status(200).json(other);
    });
};

export const logout = (req, res) => {

}