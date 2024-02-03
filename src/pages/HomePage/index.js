import Row from "../../components/mui/Layout/Row";
import Col from "../../components/mui/Layout/Col";
import Product from "../../components/pages/productsPage/Product";
import ProductsCategorization from "../../components/Layout/Header/productsCategorization/productsCategorization";
import NewsItem from "../../components/pages/homePage/NewsItem";
import HomeFeatures from "../../components/pages/homePage/HomeFeatures";
import productsCategorization from "../../Data/productsCategorization";
import productsInformation from "../../Data/productsInformation";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styles from './home.module.scss';

const HomePage = () => {

    return (<>
        <div className={styles.box1Wrapper}>
            <Row spacing={4} className={styles.box1}>
                <Col xs={12} lg={6} marginTop='-30px' className={styles.box1Right}>
                    <Typography variant="h1" fontSize="2.5rem" textAlign="center" marginTop="35px" color='#01e281'>
                        سوپر مارکت اکسترا
                    </Typography>
                    <Typography fontSize="2.5rem" textAlign="center" margin="30px 0">
                        تازه تر از همه جا
                    </Typography>
                    <Typography fontSize="1rem" textAlign="center" color="#535353">سوپرمارکت شکلی از
                        خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف
                        سرویس است.
                    </Typography>
                    <Col className={styles.box1Item1Buttons} width="fit-content">
                        <Button variant="contained" className={styles.button1}>
                            <Typography fontSize="1.2rem" color="white" className={styles.button1Text}>
                                ۲۵٪ تخفیف ویژه
                            </Typography>
                        </Button>
                        <Button variant="outlined" className={styles.button2}>
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
        <HomeFeatures/>
        <Row className={styles.space}/>
        <Row spacing={4} width='100%'>
            <Col xs={12} lg={8}>
                <Row spacing={4} className={styles.someOffer}>
                    <Col xs={12} lg={6} height="50%">
                        <div className={styles.box2Column1Item1}>
                            <Typography
                                fontSize='1.3rem'
                                color='white'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                تخفیف ۵۰٪
                            </Typography>
                            <Typography
                                fontSize='2rem'
                                color='white'
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
                                color='#01e281'
                                display="block"
                                textAlign='right'
                                margin='0 15px 0 0'
                                paddingTop="15px"
                            >
                                تخفیف ۵۰٪
                            </Typography>
                            <Typography
                                fontSize='2rem'
                                color='#122d40'
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
                                color='#01e281'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                تخفیف ویژه ۵۰٪
                            </Typography>
                            <Typography
                                fontSize='2rem'
                                color='white'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                روی تمامی میوه ها
                            </Typography>
                            <Button variant="contained" color="secondary" className={styles.button7}>
                                <Typography className={styles.button7Text} fontSize="18px">الان بخرید</Typography>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={4}>
                <div className={styles.box2Column2}>
                    <Typography
                        fontSize='1.3rem'
                        color='white'
                        display="block"
                        textAlign='left'
                        margin='0 0 0 15px'
                        paddingTop="15px"
                    >
                        تخفیف ۵۰٪
                    </Typography>
                    <Typography
                        fontSize='2rem'
                        color='white'
                        display="block"
                        textAlign='left'
                        margin='0 0 0 15px'
                        paddingTop="15px"
                    >
                        سبزیجات تازه و با کیفیت
                    </Typography>
                    <Button variant="contained" color="primary" className={styles.button3}>
                        <Typography className={styles.button3Text} fontSize="1rem">الان بخرید</Typography>
                    </Button>
                </div>
            </Col>
        </Row>
        <Row className={styles.space}/>
        <Row className={styles.box3}>
            <div>
                <Typography fontSize='40px' width="100%" color="black">دسته بندی</Typography>
                <Typography fontSize='40px' width="100%" color='#01e281'> محصولات ما</Typography>
            </div>
            <Row spacing={4} marginTop="0">
                {productsCategorization.map((item) => (<Col item xs={12} sm={4} lg={2}>
                    <ProductsCategorization titleColor={"black"} {...item}/>
                </Col>))}
            </Row>
        </Row>
        <Row className={styles.space}/>
        <Row className={styles.box4}>
            <div className={styles.box4Title}>
                <div>
                    <Typography fontSize='40px' width="100%" color="black">پرفروش ترین</Typography>
                    <Typography fontSize='40px' width="100%" color="secondary"> محصولات</Typography>
                </div>
                <Button variant="contained" color="secondary" className={styles.button4}>
                    <Typography fontSize='18px' color="primary" className={styles.button4Text}>همه محصولات</Typography>
                </Button>
            </div>
            <Row spacing={4} width="100%">
                {productsInformation.map((productDataItem) => (<Col xs={12} sm={6} lg={3}>
                    <Product {...productDataItem} />
                </Col>))}
            </Row>
        </Row>
        <Row className={styles.space}></Row>
        <Row className={styles.box5}>
            <Col xs={12} md={6} className={styles.box5Col1}>
                <div className={styles.box5Text}>
                    <Typography
                        variant="h1"
                        fontSize='2rem'
                        color='white'
                        display="block"
                        textAlign='center'
                        margin="40px 0 0 0"
                        opacity='95%'
                        className={styles.box5TextH1}
                    >
                        سوپر مارکت اکسترا
                    </Typography>
                    <Typography
                        fontSize='3rem'
                        color='white'
                        display="block"
                        textAlign='center'
                        margin='20px 0 30px 0'
                        paddingTop="15px"
                        opacity='95%'
                    >
                        سفارش با موبایل
                    </Typography>
                    <Typography className={styles.box5Text1} fontSize='1rem' textAlign='center' color="white">
                        سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد.
                    </Typography>
                </div>
                <div className={styles.box5Buttons}>
                    <Link href="/" className={styles.box5Button1}>
                        <img className={styles.googleplayImg} src="/img/googleplay.png" alt=""/>
                    </Link>
                    <Link href="/">
                        <img className={styles.appStore} src="/img/appStore.png" alt=""/>
                    </Link>
                </div>
            </Col>
            <Col xs={12} md={6} className={styles.box5Button}>
                <Link href="/" className={styles.box5Img}>
                    <img src="/img/mobile.png" className={styles.box5Img2} alt=""/>
                </Link>
            </Col>
        </Row>
        <Row className={styles.space}/>
        <Row className={styles.box6}>
            <div className={styles.box6Title}>
                <div>
                    <Typography fontSize='40px' color="black">جدید ترین</Typography>
                    <Typography fontSize='40px' color="#01e281"> اخبار و مقالات</Typography>
                </div>
            </div>
            <div className={styles.newsItem}>
                <NewsItem/>
            </div>
        </Row>
        {/*<Row>*/}
        {/*    <Col xs={12}>*/}
        {/*        <NewsSlider/>*/}
        {/*    </Col>*/}
        {/*</Row>*/}
        <Row className={styles.space}/>
    </>);
};

export default HomePage;