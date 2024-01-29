import React from 'react';
import style from './Layout.module.css';
import Header from "../Header";
import Footer from "../Footer";
import {AppBar} from "@mui/material";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={style.Layout}>
            <Header/>
            <Outlet/>
            <Footer/>
            <AppBar/>
        </div>
    );
};

export default Layout;