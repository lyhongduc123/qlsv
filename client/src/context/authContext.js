import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));

    const login = async (input) => {
        const res = await axios.post("http://localhost:5000/server/auth/login", input);
        setCurrentUser(res.data);
    }

    const logout = async (input) => {
        await axios.post("http://localhost:5000/server/auth/logout");
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContexProvider.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContexProvider.Provider>
    )
};