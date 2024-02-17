import React, {useContext, useReducer, useState} from 'react';
import ProductOption from "./ProductOption";
import {useDispatch, useSelector} from "react-redux";
import {counterCart, increaseCounterCart, increment} from "../../../../redux/reducers/counterCart";
import {faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Alert, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogTitle, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from './Product.module.css';
import Button from "@mui/material/Button";
import {counterBeloved, increaseCounterBeloved} from "../../../../redux/reducers/counterBeloved";
import {Link} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Product = ({ image, name, price, to, closeIcon, }) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()

    return (
        <div className={styles.product}>
            {
                closeIcon ?
                    <div className={styles.closeIconWrapper}>
                        <IconButton color="error" className={styles.closeIcon}>
                            <CloseIcon color="error"/>
                        </IconButton>
                    </div>
                : null
            }
            <Card component={Link} to={to} sx={{width: '100%', borderRadius: '20px'}}>
                <CardActionArea style={{paddingBottom: '40px'}}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={image}
                        alt={name}
                        style={{objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price} تومان
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className={styles.productOption}>
                    <ProductOption
                        iconVertical="center"
                        iconHorizontal="right"
                        textVertical="center"
                        textHorizontal="left"
                        iconName={faHeart}
                        title='افزودن به علاقمندی ها'
                        onClick={() => dispatch(increaseCounterBeloved())}
                    />
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
            <Button
                variant="contained"
                color="secondary"
                className={styles.button1}
                onClick={ () =>{
                    dispatch(increaseCounterCart())
                    handleClickOpen()
                }}
            >
                <FontAwesomeIcon className={styles.button1Text} style={{marginLeft: '10px'}} icon={faCartShopping}/>
                <Typography className={styles.button1Text}>افزودن به سبد خرید</Typography>
            </Button>
        </div>
    );
};

export default Product;