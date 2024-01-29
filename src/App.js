import React from 'react';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/index.js";
import {ThemeProvider} from "@mui/material";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { Provider } from 'react-redux'
import theme from "./components/themeConfig";
import store from "./redux/store";
import './assets/font/NotoArabic/style.css'
import './App.scss'
import ProductPage from "./pages/ProductPage/index.js";
import NewsPage from "./pages/NewsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";

function App() {

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={ <Layout/> }>
                            <Route exact path='/' element={<HomePage/>}/>
                            <Route exact path='products' element={<ProductsPage/>}/>
                            <Route exact path='news' element={<NewsPage/>}/>
                            <Route exact path='contact-us' element={<ContactUsPage/>}/>
                            <Route exact path='product' element={<ProductPage/>}/>
                        </Route>
                        <Route exact path='login' element={<LoginPage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
