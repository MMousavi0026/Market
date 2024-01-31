import React from 'react';
import HomeFeature from "./HomeFeature";
import Row from "../../../mui/Layout/Row";
import Col from "../../../mui/Layout/Col";
import style from "./HomeFeatures.module.css"

const HomeFeatures = () => {
    const data = [
        {title: "حمل و نقل رایگان", description: "تا ۵۰۰,۰۰۰ تومان", imageSrc: "/img/Transportation.png"},
        {title: "استرداد رایگان", description: "تا ۳ روز پس از خرید", imageSrc: "/img/Transportation.png"},
        {title: "پرداخت امن", description: "پرداختی امن ۱۰۰٪", imageSrc: "/img/Transportation.png"},
        {title: "۲۴/۷ پشتیبانی", description: "با ما تماس بگیرید", imageSrc: "/img/Transportation.png"},
    ]
    return (
        <Row container rowSpacing={{ xs: 3, lg:0}} className={style.HomeFeatures}>
            {
                data.map((item) => {
                    return (
                        <Col item xs={12} sm={6} lg={3} className={style.columns}>
                            <HomeFeature {...item}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default HomeFeatures;