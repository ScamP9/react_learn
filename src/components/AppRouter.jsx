import React, {useContext} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import LoginTrue from "../pages/LoginTrue";
import Login from "../pages/Login";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
            ?
            <Routes>
                <Route index element={<About/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route exact path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="/*" element={<Error/>}/>
                <Route path="/login" element={<LoginTrue/>}/>
            </Routes>
            :
            <Routes>
                <Route path="/*" element={<Login replace/>}/>
            </Routes>
    );


};

export default AppRouter;