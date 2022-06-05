import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }


    return (
        <div className="navbar">
            <div className="navbar__links">
                <div className="navbar__links__about">
                    <Link to="/">О сайте</Link>
                </div>
                <div className="navbar__links__posts">
                    <Link to="/posts">Посты</Link>
                </div>
                <MyButton>
                    <Link style={{fontSize: 14}} to="/login">Войти</Link>
                </MyButton>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            </div>
        </div>
    );
};

export default Navbar;