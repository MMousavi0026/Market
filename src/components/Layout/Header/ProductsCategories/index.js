import React from 'react';
import styles from "./productsCategories.module.css";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const ProductsCategories = ({imgSrc, title, titleColor, discount, style, to}) => {
    return (
        <Link href={to}>
            <Button className={styles.item} style={style}>
                <img className={styles.fish} alt='item' src={imgSrc}/>
                <span style={{fontSize: '20px', paddingTop: '17px', color: titleColor}}>{title}</span>
                <span style={{fontSize: '14px', paddingTop: '17px', color: "#01e281"}}>{discount}</span>
            </Button>
        </Link>
    );
};

export default ProductsCategories;