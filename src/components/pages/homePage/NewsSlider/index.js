import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {newsList} from "../../../../data/newsList";
import NewsItemComponent from "../NewsItem/NewsItemComponent";

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}


const NewsSlider = () => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    return (
        <Slider {...settings} style={{marginLeft: "18px"}}>
            {
                newsList.map((item) => (
                    <div>
                        <NewsItemComponent to={`/news/${item.id}`} {...item} />
                    </div>
                ))
            }
        </Slider>
    );
};

export default NewsSlider;