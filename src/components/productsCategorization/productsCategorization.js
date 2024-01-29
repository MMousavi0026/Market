import React from 'react';
import styles from "./productsCategorization.module.css";
import Button from "@mui/material/Button";

const ProductsCategorization = ({imgSrc, title, titleColor, discount, style}) => {
    return (
        <Button className={styles.item} style={style}>
            <img className={styles.fish} alt='item' src={imgSrc}/>
            <span style={{fontSize: '20px', paddingTop: '17px', color: titleColor}}>{title}</span>
            <span style={{fontSize: '14px', paddingTop: '17px', color: "#01e281"}}>{discount}</span>
        </Button>
    );
};

export default ProductsCategorization;