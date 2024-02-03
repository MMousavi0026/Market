import React from 'react';
import Row from "../../components/mui/Layout/Row";
import Col from "../../components/mui/Layout/Col";
import ProductOption from "../../components/pages/productsPage/Product/ProductOption";
import {multipurposeSpray} from "../../Data/product";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faCodeCompare, faHeart} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import styles from "./Product.module.css"

const ProductPage = () => {
    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col height="50px" width="100%"/>
            <Col>
                <Row columnSpacing={4}>
                    <Col width="39%" position="sticky">
                        <div>
                            <img width="100%" src={multipurposeSpray[0].imgSrc} alt={multipurposeSpray[0].title}
                                 className={styles.productImg}/>
                        </div>
                    </Col>
                    <Col width="60%">
                        <Row rowSpacing={3} style={{flexDirection: "column"}}>
                            <Col>
                                <Typography fontWeight="bold" variant="h4">{multipurposeSpray[0].title}</Typography>
                            </Col>
                            <Col>
                                <Rating name="read-only" value={multipurposeSpray[0].rateNum} readOnly/>
                            </Col>
                            <Col>
                                <Typography fontWeight="bold" variant="h6" color="secondary">
                                    {multipurposeSpray[0].price} تومان
                                </Typography>
                            </Col>
                            <Col>
                                <Typography fontWeight="" variant="body1" color="gray">
                                    {multipurposeSpray[0].desc}
                                </Typography>
                            </Col>
                            <Col style={{width:"100%", display: "flex", alignItems: "center", flexDirection: "row"}}>
                                <Button variant="contained" className={styles.cartShoppingButton}>
                                    <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faCartShopping}/>
                                    <Typography>افزودن به سبد خرید</Typography>
                                </Button>
                                <ProductOption
                                    iconVertical="top"
                                    iconHorizontal="center"
                                    textVertical="bottom"
                                    textHorizontal="center"
                                    iconName={faHeart}
                                    title='افزودن به علاقمندی ها'
                                />
                                <ProductOption
                                    iconVertical="top"
                                    iconHorizontal="center"
                                    textVertical="bottom"
                                    textHorizontal="center"
                                    iconName={faCodeCompare}
                                    title='افزودن به مقایسه'
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProductPage;