import React, {useContext, useReducer} from 'react';
import {faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import ProductOption from "./ProductOption/ProductOption";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './Product.module.css';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch} from "react-redux";
import {increment} from "../../redux/reducers/counterCart";

const Product = ({imgSrc, title, price}) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.product}>
            <Card sx={{maxWidth: '100%', borderRadius: '20px'}}>
                <CardActionArea style={{paddingBottom: '40px'}}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={imgSrc}
                        alt={title}
                        style={{objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className={styles.productOption}>
                    <ProductOption iconName={faHeart} title={'افزودن به علاقمندی ها'}/>
                    <ProductOption iconName={faCodeCompare} title={'افزودن به مقایسه'}/>
                    <ProductOption iconName={faMagnifyingGlass} title={'نمایش سریع'}/>
                </div>
            </Card>
            <button className={styles.button1} onClick={() => dispatch(increment())}>
                <FontAwesomeIcon className={styles.button1Text} style={{marginLeft: '10px'}} icon={faCartShopping}/>
                <span className={styles.button1Text}>افزودن به سبد خرید</span>
            </button>
        </div>
    );
};

export default Product;