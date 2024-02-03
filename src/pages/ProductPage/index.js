import React, {useState} from 'react';
import Row from "../../components/mui/Layout/Row";
import Col from "../../components/mui/Layout/Col";
import ProductOption from "../../components/Pages/ProductsPage/Product/ProductOption";
import {multipurposeSpray} from "../../Data/product";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faCodeCompare, faHeart} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useDispatch} from "react-redux";
import {incrementByAmount} from "../../redux/reducers/counterCart";
import Divider from "@mui/material/Divider";
import styles from "./Product.module.css"

const ProductPage = () => {
    const dispatch = useDispatch()

    const [cartNumber, setCartNumber] = useState(1)
    const decrementCartNumber = () => {
        if (cartNumber > 1) {
            setCartNumber(cartNumber - 1);
        }
    }
    const incrementCartNumber = () => {
        setCartNumber(cartNumber + 1)
    }

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col height="50px" width="100%"/>
            <Col>
                <Row columnSpacing={4}>
                    <Col width="39%" position="sticky">
                        <div>
                            <img
                                width="100%"
                                src={multipurposeSpray[0].imgSrc}
                                alt={multipurposeSpray[0].title}
                                className={styles.productImg}
                            />
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
                            <Col
                                style={{
                                    width: "34%",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column"
                                }}
                            >
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:"10px"}}>
                                    <Button onClick={decrementCartNumber} color="secondary">-</Button>
                                    <div style={{ border:"rgba(128, 128, 128, 0.4) solid 1px", padding:"5px 15px", borderRadius:"10px", margin:"0 5px"}}>{cartNumber}</div>
                                    <Button onClick={incrementCartNumber} color="secondary">+</Button>
                                </div>
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        className={styles.cartShoppingButton}
                                        onClick={() => dispatch(incrementByAmount(cartNumber))}
                                    >
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
                                </div>
                            </Col>
                            <Col>
                                <Divider/>
                            </Col>
                            <Col style={{display:'flex', flexDirection:"column"}}>
                                <div style={{display:'flex', flexDirection:"row"}}>
                                    <Typography variant="body2"> تگ:&nbsp;</Typography>
                                    <Typography variant="body2" sx={{color:"rgba(128, 128, 128, 0.8)"}}>{multipurposeSpray[0].tag}</Typography>
                                </div>
                                <div style={{display:'flex', flexDirection:"row", marginTop:"5px"}}>
                                    <Typography variant="body2"> دسته بندی:&nbsp;</Typography>
                                    <Typography variant="body2" sx={{color:"rgba(128, 128, 128, 0.8)"}}>{multipurposeSpray[0].categories}</Typography>
                                </div>
                            </Col>
                            <Col>
                                <Divider/>
                            </Col>
                            <Col style={{display:'flex', flexDirection:"column"}}>
                                <Typography variant="body2" sx={{color:"rgba(128, 128, 128, 1)"}}>
                                    &#10003; ارسال رایگان برای سفارش های بالای ۱۰۰ تومان
                                </Typography>
                                <Typography variant="body2" sx={{color:"rgba(128, 128, 128, 1)", margin:"5px 0"}}>
                                    &#10003; ۲۱ روز بازپرداخت و بازگشت آسان
                                </Typography>
                                <Typography variant="body2" sx={{color:"rgba(128, 128, 128, 1)"}}>
                                    &#10003; محصول دارای مالیات و عوارض گمرکی نیست
                                </Typography>
                            </Col>
                            <Col sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <div style={{width:"100%", backgroundColor:"rgba:(0,0,0 0.4)", borderRadius:"10rem", display:'flex', flexDirection:"row"}}>
                                    <Typography>اشتراک گذاری:</Typography>
                                    <FacebookOutlinedIcon sx={{color:"rgba(128, 128, 128, 1)", margin:"10px 0"}}/>
                                    <WhatsAppIcon sx={{color:"rgba(128, 128, 128, 1)", margin:"10px 0"}}/>
                                    <XIcon sx={{color:"rgba(128, 128, 128, 1)", margin:"10px 0"}}/>
                                    <PinterestIcon sx={{color:"rgba(128, 128, 128, 1)", margin:"10px 0"}}/>
                                    <EmailIcon sx={{color:"rgba(128, 128, 128, 1)", margin:"10px 0"}}/>
                                    <ContentCopyIcon sx={{color:"rgba(128, 128, 128, 1)", margin:"10px 0"}}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProductPage;