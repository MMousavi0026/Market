import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {newsList} from "../../../../data/newsList";
import NewsItemComponent from "../NewsItem/NewsItemComponent";

const NewsSlider = () => {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setSettings({
                ...settings,
                slidesToShow:
                    width < 600 ? 1 : width < 900 ? 2 : 4,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on first render

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Slider {...settings}>
            {
                newsList.map((item) => (
                    <div>
                        <NewsItemComponent {...item}/>
                    </div>
                ))
            }
        </Slider>
    );
};

export default NewsSlider;