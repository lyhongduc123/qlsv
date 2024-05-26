import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/server/controller/auth/login", input);
            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="Username" onChange={handleChange} />
                <input required type="password" placeholder="Password" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit} >Login</button>
                {err && <p>{err}</p>}
            </form>
        </div>
    );
}

export default Login