import React from 'react';
import NewsItemComponent from "./NewsItemComponent";
import styles from "./NewsItem.module.css";

const NewsItem = () => {

    const data = [
        {title: "بروزرسانی ها", imgSrc: "/img/box6Item1.jpg", description: "میوه و صیفی جات در سوپر مارکت",},
        {title: "بروزرسانی ها", imgSrc: "/img/news.jpg", description: "میوه و صیفی جات در سوپر مارکت",},
        {title: "بروزرسانی ها", imgSrc: "/img/mosahebe.jpg", description: "میوه و صیفی جات در سوپر مارکت",},
        {title: "بروزرسانی ها", imgSrc: "/img/educate.jpg", description: "میوه و صیفی جات در سوپر مارکت",}
    ]

    return (
        <div className={styles.box6Items}>
            {
                data.map((item) => <NewsItemComponent {...item}/>)
            }
        </div>
    );
};

export default NewsItem;