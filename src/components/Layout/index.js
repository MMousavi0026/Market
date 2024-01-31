import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import style from './Layout.module.css';

const Layout = () => {
    return (
        <div className={style.Layout}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;