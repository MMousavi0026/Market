import React, {useState} from 'react';
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import ProductOption from "../../components/pages/productsPage/Product/ProductOption";
import {multipurposeSpray} from "../../data/product";
import Typography from "@mui/material/Typography";
import {Rating, Tab, Tabs} from "@mui/material";
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
import SocialMediaIcon from "./SocialMediaIcon";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 , display:"flex", justifyContent:"center" , backgroundColor:"#122d40", borderRadius:"15px"}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductPage = () => {

    const socialMediaIcon = [
        {icon: FacebookOutlinedIcon, title:"اشتراک گذاری در فیسبوک"},
        {icon: WhatsAppIcon, title:"اشتراک گذاری در واتساپ"},
        {icon: XIcon, title:"اشتراک گذاری در ایکس"},
        {icon: PinterestIcon, title:"اشتراک گذاری در پینترست"},
        {icon: EmailIcon, title:"اشتراک گذاری در ایمیل"},
        {icon: ContentCopyIcon, title:"کپی لینک کوتاه"},
    ]
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

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12} height="50px"/>
            <Col xs={12}>
                <Row columnSpacing={4}>
                    <Col md={5.5} position="sticky">
                        <div>
                            <img
                                width="100%"
                                src={multipurposeSpray[0].imgSrc}
                                alt={multipurposeSpray[0].title}
                                className={styles.productImg}
                            />
                        </div>
                    </Col>
                    <Col md={6.5}>
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
                                <div style={{width:"fit-content", backgroundColor:"#f1f2f6", borderRadius:"10rem", display:'flex', alignItems:"center", justifyContent:"center", flexDirection:"row", padding:"5px 15px"}}>
                                    <Typography style={{margin:"0 15px"}}>اشتراک گذاری:</Typography>
                                    {
                                        socialMediaIcon.map((item) => (
                                            <SocialMediaIcon icon={item.icon}/>
                                        ))
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <Box width="80%">
                    <Box width="100%" sx={{ justifyContent:"center" }}>
                        <Tabs width="100%" value={value} classes={{scroller: styles.tabs}} onChange={handleChange} >
                            <Tab label="توضیحات" {...a11yProps(0)} />
                            <Tab label="نظرات" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Typography color="white">
                            سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است. در حدود ۷۵ تا ۹۰ درصد کالاهای این مغازه‌ها محصولات غذایی هستند. اندازه سوپرمارکت‌ها معمولاً از خواربارفروشیهای سنتی بزرگترند و محصولات بیشتری می‌فروشند ولی از هایپرمارکت‌ها و سوپرسنترها کوچکترند.
                        </Typography>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div style={{width:"100%", display:'flex', alignItems:"start", flexDirection:"column"}}>
                            <Typography variant="h5" color="white">۱ دیدگاه برای اسپری چند منظوره</Typography>
                            <div style={{backgroundColor:"white", width:"97%", borderRadius:"10px", marginTop:"30px", padding:"10px", display:"flex", flexDirection:"column"}}>
                                <Rating value={3} readOnly/>
                                <div>
                                    <Typography>آناهیتا خسروی</Typography>
                                    <Typography variant="caption" padding="10px" sx={{backgroundColor:"rgba(167,167,167,.15)"}}>۲۷ دی ۱۴۰۲</Typography>
                                </div>
                                <Typography variant="body2" color="rgb(128, 128, 128)">بسیار عالی، از حمایت صمیمانه و بهترین محصول شما بسیار متشکرم.</Typography>
                            </div>
                        </div>
                    </CustomTabPanel>
                </Box>
            </Col>
        </Row>
    );
};

export default ProductPage;