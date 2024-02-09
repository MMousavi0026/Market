import React, {useContext, useReducer} from 'react';
import ProductOption from "./ProductOption";
import {useDispatch} from "react-redux";
import {counterCart, increment} from "../../../../redux/reducers/counterCart";
import {faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from './Product.module.css';
import Button from "@mui/material/Button";

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
                    <Button onClick={() => dispatch(increment)}>
                        <ProductOption
                            iconVertical="center"
                            iconHorizontal="right"
                            textVertical="center"
                            textHorizontal="left"
                            iconName={faHeart}
                            title='افزودن به علاقمندی ها'
                        />
                    </Button>
                    <ProductOption
                        iconVertical="center"
                        iconHorizontal="right"
                        textVertical="center"
                        textHorizontal="left"
                        iconName={faCodeCompare}
                        title='افزودن به مقایسه'
                    />
                    <ProductOption
                        iconVertical="center"
                        iconHorizontal="right"
                        textVertical="center"
                        textHorizontal="left"
                        iconName={faMagnifyingGlass}
                        title='نمایش سریع'
                    />
                </div>
            </Card>
            <Button variant="contained" color="secondary" className={styles.button1} onClick={() => dispatch(increment())}>
                <FontAwesomeIcon className={styles.button1Text} style={{marginLeft: '10px'}} icon={faCartShopping}/>
                <Typography className={styles.button1Text}>افزودن به سبد خرید</Typography>
            </Button>
        </div>
    );
};

export default Product;