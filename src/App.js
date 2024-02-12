import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NewsPage from "./pages/NewsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SignInPage from "./pages/LoginPage/SignInPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import { Provider } from 'react-redux'
import theme from "./components/mui/ThemeConfig";
import store from "./redux/store";
import './assets/font/NotoArabic/style.css'
import './App.scss'
import LoginPage from "./pages/LoginPage";
import TheNewsPage from "./pages/TheNewsPage";
import FavoritePage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CartPage/CheckoutPage";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={ <Layout/> }>
                            <Route exact path='/' element={<HomePage/>}/>
                            <Route exact path='shop' element={<ShopPage/>}/>
                            <Route exact path='shop/:productId' element={<ProductPage/>}/>
                            <Route exact path='news' element={<NewsPage/>}/>
                            <Route exact path='news/:newsId' element={<TheNewsPage/>}/>
                            <Route exact path='contact-us' element={<ContactUsPage/>}/>
                            <Route exact path='login' element={<LoginPage/>}/>
                            <Route exact path='favorite-list' element={<FavoritePage/>}/>
                            <Route exact path='cart-list' element={<CartPage/>}/>
                            <Route exact path='checkout' element={<CheckoutPage/>}/>
                        </Route>
                        <Route exact path='sign-in' element={<SignInPage/>}/>
                        <Route exact path='sign-up' element={<SignUpPage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
