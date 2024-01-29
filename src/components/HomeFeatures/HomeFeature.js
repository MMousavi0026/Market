import React from 'react';
import styles from "./HomeFeatures.module.css";


const HomeFeature = ({imageSrc, title, description}) => {
    return (
        <div className={styles.floatBoxItem}>
            <img src={imageSrc} alt={title} className={styles.floatBoxItemImg}/>
            <div>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
};

export default HomeFeature;