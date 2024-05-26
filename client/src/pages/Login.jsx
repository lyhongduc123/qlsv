import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(input);
            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <input required type="text" placeholder="Username" onChange={handleChange} />
                <input required type="password" placeholder="Password" onChange={handleChange} />
                <button type="submit" >Login</button>
                {err && <p>{err}</p>}
            </form>
        </div>
    );
}

export default Login