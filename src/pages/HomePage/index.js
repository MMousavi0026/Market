import React, {useState} from "react";
import {Link} from "react-router-dom";
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import ProductsCategories from "../../components/Layout/Header/ProductsCategories";
import Product from "../../components/pages/ShopPage/Product";
import HomeFeatures from "../../components/pages/homePage/HomeFeatures";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {productsList, productsCategories} from "../../data/productsData";
import NewsSlider from "../../components/pages/homePage/NewsSlider";
import {newsList} from "../../data/newsList";
import styles from './HomePage.module.scss';

const HomePage = () => {
    const [productsDataList] = useState(productsList.slice(0, 4))
    const [newsData] = useState(newsList.slice(0, 4))

    return (
        <Row rowSpacing={4}>
            <Col xs={12}>
                <div className={styles.box1Wrapper}>
                    <Row spacing={4} className={styles.box1}>
                        <Col xs={12} lg={6} marginTop='-30px' className={styles.box1Right}>
                            <Typography variant="h3" textAlign="center" marginTop="35px" color='secondary'>
                                سوپر مارکت اکسترا
                            </Typography>
                            <Typography variant="h4" textAlign="center" margin="30px 0">
                                تازه تر از همه جا
                            </Typography>
                            <Typography variant="body1" textAlign="center" color="#535353">سوپرمارکت شکلی از
                                خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به
                                اصطلاح
                                سلف
                                سرویس است.
                            </Typography>
                            <Col className={styles.box1Item1Buttons} width="fit-content">
                                <Button component={Link} to="#" variant="contained" className={styles.button1}>
                                    <Typography fontSize="1.2rem" color="white.main" className={styles.button1Text}>
                                        ۲۵٪ تخفیف ویژه
                                    </Typography>
                                </Button>
                                <Button component={Link} to="/shop" variant="outlined" className={styles.button2}>
                                    <Typography fontSize="1.2rem" color="#122d40" className={styles.button1Text}>
                                        مشاهده محصولات
                                    </Typography>
                                </Button>
                            </Col>
                        </Col>
                        <Col xs={12} lg={6} style={{paddingTop: '90px', display: 'flex', justifyContent: 'center'}}>
                            <img className={styles.homeBoxManImg} src="/img/homeBox1.1.png" alt="shopping"/>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={12}>
                <HomeFeatures/>
            </Col>
            <Col xs={12}>
                <Row spacing={4} width='100%'>
                    <Col xs={12} lg={8}>
                        <Row spacing={4} className={styles.someOffer}>
                            <Col xs={12} lg={6} height="50%">
                                <div className={styles.box2Column1Item1}>
                                    <Typography
                                        fontSize='1.3rem'
                                        color='white.main'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        paddingTop="15px"
                                    >
                                        تخفیف ۵۰٪
                                    </Typography>
                                    <Typography
                                        fontSize='2rem'
                                        color='white.main'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        paddingTop="15px"
                                    >
                                        سس ها
                                    </Typography>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} height="50%">
                                <div className={styles.box2Column1Item2}>
                                    <Typography
                                        fontSize='1.3rem'
                                        color='secondary'
                                        display="block"
                                        textAlign='right'
                                        margin='0 15px 0 0'
                                        paddingTop="15px"
                                    >
                                        تخفیف ۵۰٪
                                    </Typography>
                                    <Typography
                                        fontSize='2rem'
                                        color='primary'
                                        display="block"
                                        textAlign='right'
                                        margin='0 15px 0 0'
                                        paddingTop="15px"
                                    >
                                        تنقلات
                                    </Typography>
                                </div>
                            </Col>
                            <Col xs={12} height="50%">
                                <div className={styles.box2Column1Item3}>
                                    <Typography
                                        fontSize='1.3rem'
                                        color='secondary'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        paddingTop="15px"
                                    >
                                        تخفیف ویژه ۵۰٪
                                    </Typography>
                                    <Typography
                                        fontSize='2rem'
                                        color='white.main'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        padding="15px 0"
                                    >
                                        روی تمامی میوه ها
                                    </Typography>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className={styles.box2Column2}>
                            <Typography
                                fontSize='1.3rem'
                                color='white.main'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                تخفیف ۵۰٪
                            </Typography>
                            <Typography
                                fontSize='2rem'
                                color='white.main'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                سبزیجات تازه و با کیفیت
                            </Typography>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12}>
                <Row className={styles.box3}>
                    <div>
                        <Typography fontSize='2.3rem' width="100%" color="black">دسته بندی</Typography>
                        <Typography fontSize='2.3rem' width="100%" color='#01e281'> محصولات ما</Typography>
                    </div>
                    <Row spacing={4} marginTop="0">
                        {productsCategories.map((item) => (
                            <Col item xs={12} sm={4} lg={2}>
                                <ProductsCategories titleColor={"black"} {...item}/>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Col>
            <Col xs={12}>
                <Row className={styles.box4}>
                    <div className={styles.box4Title}>
                        <div>
                            <Typography fontSize='2.3rem' width="100%" color="black">پرفروش ترین</Typography>
                            <Typography fontSize='2.3rem' width="100%" color="secondary"> محصولات</Typography>
                        </div>
                        <Button component={Link} to="/shop" variant="contained" color="secondary" className={styles.button4}>
                            <Typography fontSize='18px' color="primary" className={styles.button4Text}>همه
                                محصولات</Typography>
                        </Button>
                    </div>
                    <Row spacing={4} width="100%">
                        {productsDataList.map((productDataItem) => (<Col xs={12} sm={6} lg={3}>
                            <Product {...productDataItem} />
                        </Col>))}
                    </Row>
                </Row>
            </Col>
            <Col xs={12}>
                <Row className={styles.box5}>
                    <Col xs={12} md={6} className={styles.box5Col1}>
                        <div className={styles.box5Text}>
                            <Typography
                                variant="h1"
                                fontSize='2rem'
                                color='white.main'
                                display="block"
                                textAlign='center'
                                margin="40px 0 0 0"
                                opacity='95%'
                            >
                                سوپر مارکت اکسترا
                            </Typography>
                            <Typography
                                fontSize='3rem'
                                color='white.main'
                                display="block"
                                textAlign='center'
                                margin='20px 0 30px 0'
                                paddingTop="15px"
                                opacity='95%'
                            >
                                سفارش با موبایل
                            </Typography>
                            <Typography className={styles.box5Text1} fontSize='1rem' textAlign='center'
                                        color="white.main">
                                سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه
                                برمی‌دارد.
                            </Typography>
                        </div>
                        <div className={styles.box5Buttons}>
                            <Link to="/" className={styles.box5Button1}>
                                <img className={styles.googleplayImg} src="/img/googleplay.png" alt=""/>
                            </Link>
                            <Link to="/">
                                <img className={styles.appStore} src="/img/appStore.png" alt=""/>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={styles.box5Button}>
                        <Link to="/" className={styles.box5Img}>
                            <img src="/img/mobile.png" width="100%" className={styles.box5Img2} alt=""/>
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className={styles.box6}>
                <div className={styles.box6Title}>
                    <div>
                        <Typography fontSize='2.3rem' color="black">جدید ترین</Typography>
                        <Typography fontSize='2.3rem' color="#01e281"> اخبار و مقالات</Typography>
                    </div>
                </div>
                <div style={{width: "100%"}}>
                    <NewsSlider/>
                </div>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

export default HomePage;